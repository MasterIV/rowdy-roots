import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';
import Cursor from '../entity/Cursor';
import Viewport from 'tin-engine/lib/viewport';
import config from '../config';
import shapes from '../shapes';
import Button from 'tin-engine/basic/button';
import V2, {Zero} from 'tin-engine/geo/v2';
import Turret from '../entity/Turret';
import Entity from 'tin-engine/basic/entity';
import Enemy from '../entity/Enemy';
import Resources from '../ui/Resources';

export default class GameScene extends Scene {
	constructor(level) {
		super();
		this.setSize(config.screen.w, config.screen.h);
		this.resources = {hp: 10, water: 0, sun: 2};

		this.viewport = new Viewport(true);
		this.add(this.viewport);

		this.map = new Map(level);
		this.viewport.add(this.map);

		this.cursor = new Cursor(this.map);
		this.viewport.add(this.cursor);


		this.enemies = new Entity();
		this.viewport.add(this.enemies);

		this.debugSpawnEnemies();
		this.viewport.add(new Turret(new V2(700, 700), {
			damage: 4,
			range: 350,
			cooldown: 500,
			slow: false,
			blast: 50
		}, this.enemies));

		this.viewport.dragable(true);
		this.viewport.centerSelf();

		this.add(new Resources(new V2(1080, 0), this.resources));

		const s = shapes['level' + level];
		this.add(Button.create(Zero(), () => this.cursor.setShape(s[(Math.random()*s.length)|0])).rect(100, 100));

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
}