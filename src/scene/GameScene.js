import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';
import Cursor from '../entity/Cursor';
import Viewport from 'tin-engine/lib/viewport';
import config from '../config';
import shapes from '../shapes';
import Button from 'tin-engine/basic/button';
import V2, {Zero} from 'tin-engine/geo/v2';

export default class GameScene extends Scene {
	constructor(level) {
		super();
		this.setSize(config.screen.w, config.screen.h);

		this.viewport = new Viewport(true);
		this.add(this.viewport);

		// TESTING
		level = 1;
		this.map = new Map(level);
		this.viewport.add(this.map);

		this.cursor = new Cursor(this.map);
		this.viewport.add(this.cursor);

		this.viewport.dragable(true);
		this.viewport.centerSelf();

		this.add(Button.create(Zero(), () => this.cursor.setShape(shapes[0])).rect(100, 100));

	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}