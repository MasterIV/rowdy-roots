import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';
import Cursor from '../entity/Cursor';
import Viewport from 'tin-engine/lib/viewport';
import config from '../config';
import levelData from '../definition/levels';
import V2, {Zero} from 'tin-engine/geo/v2';
import Enemy from '../entity/Enemy';
import Resources from '../ui/Resources';
import EnemySpawner from '../entity/EnemySpawner';
import TitleScene from './TitleScene';
import BuildMenu from '../ui/BuildMenu';
import RootMenu from '../ui/RootMenu';
import RectEntity from 'tin-engine/basic/rect';
import Colors from 'tin-engine/definition/colors';
import Button from '../ui/Button';
import ImageEntity from 'tin-engine/basic/image';

const overlay = new Colors('#000', 'rgba(0, 0, 0, .5)');

export default class GameScene extends Scene {
	constructor(level) {
		super();

		this.setSize(config.screen.w, config.screen.h);
		this.level = level;

		this.resources = {hp: 10, water: 0, sun: 15, claimedWater: 0 };
		this.resourceTimer = 1000;

		this.viewport = new Viewport(true);
		this.add(this.viewport);

		this.map = new Map(levelData[level].map, () => this.resources.claimedWater++);
		this.viewport.add(this.map);

		this.cursor = new Cursor(this.map, this.resources);
		this.viewport.add(this.cursor);

		this.enemies = new EnemySpawner(levelData[level].waves, this.map);
		this.viewport.add(this.enemies);

		this.viewport.dragable(true);
		this.viewport.centerSelf();

		this.center(new Resources(new V2(1080, 0), this.resources));
		this.center(new BuildMenu(new V2(0, 516), this.cursor, this.resources));
		this.center(new RootMenu(new V2(0, 550), this.cursor, levelData[level].shapes, this.resources));
	}

	debugSpawnEnemies() {
		const center = this.map.size.quo(2);
		const regular = {hp: 10, speed: 50};
		this.enemies.add(new Enemy(new V2(200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 1200), regular, center));
		this.enemies.add(new Enemy(new V2(200, 1200), regular, center));
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
			this.resourceTimer += 1000;
		}
		if (this.parent.music.paused || !this.parent.music.currentTime) this.parent.music.play();
	}

	attack() {
		this.resources.hp--;
		if(this.resources.hp < 1) {
			this.block(new RectEntity(Zero(), this.size, overlay));
			this.block(new ImageEntity(new V2(269, 0), 'img/game_over_screen.png'));
			this.block(new Button(new V2(490, 580), 'Menu', () => this.parent.goto(new TitleScene())));
		}
	}

	levelWon() {
		this.block(new RectEntity(Zero(), this.size, overlay));
		this.block(new ImageEntity(new V2(173, 0), 'img/win_screen.png'));

		if(levelData.length-2 < this.level)
			this.block(new Button(new V2(490, 580), 'Menu', () => this.parent.goto(new TitleScene())));
		else
			this.block(new Button(new V2(490, 580), 'Next', () => this.parent.goto(new GameScene(this.level+1))));
	}
}