import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';
import Viewport from 'tin-engine/lib/viewport';
import config from '../config';

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
		this.viewport.dragable(true);
		this.viewport.centerSelf();
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}