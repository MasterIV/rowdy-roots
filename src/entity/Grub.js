import Entity from "tin-engine/basic/entity";
import V2 from "tin-engine/geo/v2";
import { Zero } from "tin-engine/geo/v2";
import Animation from "tin-engine/lib/animation";
import Enemy from "./Enemy";

export default class Grub extends Entity {
	constructor(pos, enemyData) {
		super(pos.sub(new V2(50, 50)), new V2(100, 100));

		this.enemyData = enemyData;

		this.add(new Animation('img/grubs.png', Zero(), 2, 750, true));
	}

	hatch(target) {
		this.enemyData.forEach(enemyGroup => {
			for (let i = 0; i < enemyGroup.count; i++) {
				const pos = new V2(
						Math.floor(Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1),
						Math.floor(Math.random() * 80 + 20) * (Math.random() < 0.5 ? -1 : 1)
					);
				const enemy = new Enemy(this.position.clone().add(pos), enemyGroup.type, target);
				this.parent.addEnemy(enemy);
			}
		});

		this.parent.removeGrub(this);
		this.remove();
	}
}