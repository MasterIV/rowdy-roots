import Entity from "tin-engine/basic/entity";
import V2 from "tin-engine/geo/v2";
import { Zero } from "tin-engine/geo/v2";
import Animation from "tin-engine/lib/animation";
import Enemy from "./Enemy";

export default class Grub extends Entity {
	constructor(pos, enemyData, target) {
		super(pos.dif(new V2(50, 50)), new V2(100, 100));

		this.enemyData = enemyData;
		this.target = target;
		this.hatching = false;
		this.hatched = 0;
		this.hatchTimer = 0;
		this.hatchGroup = [];

		this.add(new Animation('img/grubs.png', Zero(), 2, 750, true));
	}

	hatch() {
		if (this.hatching) return;

		this.hatching = true;

		this.enemyData.forEach(enemyGroup => {
			for (let i = 0; i < enemyGroup.count; i++) {
				this.hatchGroup.push([enemyGroup.type, enemyGroup.delay]);
			}
		});
	}

	spawnBug(bugData) {
		const pos = new V2(
				Math.floor(Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1),
				Math.floor(Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1)
			);
		const enemy = new Enemy(this.position.clone().add(pos), bugData[0], this.target);
		this.parent.addEnemy(enemy);
		this.hatchTimer = bugData[1];
	}

	onUpdate(delta) {
		if (this.hatching) {
			this.hatchTimer -= delta;
			if (this.hatchTimer <= 0) {
				this.spawnBug(this.hatchGroup[this.hatched]);
				this.hatched++;
				if (this.hatched >= this.hatchGroup.length) {
					this.parent.removeGrub(this);
				}
			}
		}
	}
}