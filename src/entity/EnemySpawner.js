import Entity from "tin-engine/basic/entity";
import { arrayRemove } from "tin-engine/util";
import Grub from "./Grub";
import GrubIndicator from "./GrubIndicator";

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
			} else {
				this.spawnGrubs();
			}
		} else if (this.grubs.length) {
			this.currentTimer -= delta;
			if (this.currentTimer <= 0) {
				this.hatchGrubs();
			}
		}
	}

	spawnGrubs() {
		const target = this.map.size.quo(2);
		const wave = this.waves[this.nextWave];
		this.nextWave++;

		this.currentTimer = wave.time * 1000;
		this.map.resetSpawnPositions();
		wave.enemies.forEach(nest => {
			const pos = this.map.getRandomSpawnPosition();
			const grub = new Grub(pos, nest, target);
			this.grubs.push(grub);
			this.add(grub);
			this.add(new GrubIndicator(target, grub.position));
		});
	}

	hatchGrubs() {
		this.grubs.forEach(grub => {
			grub.hatch();
		})
	}

	removeGrub(grub) {
		arrayRemove(this.grubs, grub);
		this.remove(grub);
	}

	addEnemy(enemy) {
		this.bugs.push(enemy);
		this.add(enemy);
	}

	removeEnemy(enemy) {
		arrayRemove(this.bugs, enemy);
		this.remove(enemy);
	}
}