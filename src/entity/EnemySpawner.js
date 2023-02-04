import Entity from "tin-engine/basic/entity";
import { arrayRemove } from "tin-engine/util";
import Grub from "./Grub";

export default class EnemySpawner extends Entity {
	constructor(waveData, map) {
		super();

		this.waves = waveData;
		this.map = map;
		this.nextWave = 0;
		this.currentTimer = 0;

		this.grubs = [];
		this.bugs = [];
	}

	onUpdate(delta) {
		if (!this.bugs.length && !this.grubs.length) {
			if (this.nextWave >= this.waves.length) {
				this.parent.parent.levelWon();
			}
			else {
				this.spawnGrubs();
			}
		}
		else if (this.grubs.length) {
			this.currentTimer -= delta;
			if (this.currentTimer <= 0) {
				this.hatchGrubs();
			}
		}
	}

	spawnGrubs() {
		const wave = this.waves[this.nextWave];
		this.nextWave++;

		this.currentTimer = wave.time * 1000;
		this.map.resetSpawnPositions();
		wave.enemies.forEach(nest => {
			const pos = this.map.getRandomSpawnPosition();
			const grub = new Grub(pos, nest);
			this.grubs.push(grub);
			this.add(grub);
		});
	}

	hatchGrubs() {
		const target = this.map.size.clone().div(2);
		while(this.grubs[0]) {
			this.grubs[0].hatch(target);
		}
	}

	removeGrub(grub) {
		arrayRemove(this.grubs, grub);
		grub.remove();
	}

	addEnemy(enemy) {
		this.bugs.push(enemy);
		this.add(enemy);
	}

	removeEnemy(enemy) {
		arrayRemove(this.bugs, enemy);
		enemy.remove();
	}
}