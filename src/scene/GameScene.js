import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';
import Cursor from '../entity/Cursor';
import Viewport from 'tin-engine/lib/viewport';
import config from '../config';
import levelData from '../leveldata';
import Button from 'tin-engine/basic/button';
import V2, {Zero} from 'tin-engine/geo/v2';
import Enemy from '../entity/Enemy';
import Resources from '../ui/Resources';
import EnemySpawner from '../entity/EnemySpawner';
import TitleScene from './TitleScene';
import BuildMenu from '../ui/BuildMenu';
import RootMenu from '../ui/RootMenu';
import CancelButton from '../ui/CancelButton';

export default class GameScene extends Scene {
	constructor(level) {
		super();
		this.setSize(config.screen.w, config.screen.h);
		this.resources = {hp: 10, water: 0, sun: 15, claimedWater: 0 };
		this.resourceTimer = 1000;

		this.viewport = new Viewport(true);
		this.add(this.viewport);

		this.map = new Map(levelData[level].map);
		this.viewport.add(this.map);

		this.cursor = new Cursor(this.map);
		this.viewport.add(this.cursor);

		this.enemies = new EnemySpawner(levelData[level].waves, this.map);
		this.viewport.add(this.enemies);

		this.viewport.dragable(true);
		this.viewport.centerSelf();

		this.add(new Resources(new V2(1080, 0), this.resources));
		this.center(new BuildMenu(new V2(0, 600), this.cursor));
		this.add(new RootMenu(Zero(), this.cursor, levelData[level].shapes));
		this.add(new CancelButton(new V2(100, 0), this.cursor));
	}

	debugSpawnEnemies() {
		const center = this.map.size.quo(2);
		const regular = {hp: 10, speed: 50};
		this.enemies.add(new Enemy(new V2(200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 1200), regular, center));
		this.enemies.add(new Enemy(new V2(200, 1200), regular, center));
	}

	addTurret() {

	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}

	onUpdate(delta) {
		this.resourceTimer -= delta;
		if (this.resourceTimer <= 0) {
			this.resources.sun++;
			this.resources.water += this.resources.claimedWater;
		}
	}

	claimWater() {
		this.resources.claimedWater++;
	}

	levelWon() {
		this.parent.goto(new TitleScene());
	}
}