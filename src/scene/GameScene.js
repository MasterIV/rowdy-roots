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

export default class GameScene extends Scene {
	constructor(level) {
		super();
		this.setSize(config.screen.w, config.screen.h);

		this.viewport = new Viewport(true);
		this.add(this.viewport);

		this.map = new Map(level);
		this.viewport.add(this.map);

		this.cursor = new Cursor(this.map);
		this.viewport.add(this.cursor);

		const center = this.map.size.quo(2);
		const regular = {hp: 10, speed: 20};

		this.enemies = new Entity();
		this.enemies.add(new Enemy(new V2(200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 200), regular, center));
		this.enemies.add(new Enemy(new V2(1200, 1200), regular, center));
		this.enemies.add(new Enemy(new V2(200, 1200), regular, center));
		this.viewport.add(this.enemies);

		this.viewport.dragable(true);
		this.viewport.centerSelf();

		const keys = Object.keys(shapes);
		this.add(Button.create(Zero(), () => this.cursor.setShape(shapes[keys[(Math.random()*keys.length)|0]])).rect(100, 100));

	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}