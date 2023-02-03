import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';

export default class GameScene extends Scene {
	constructor(level) {
		super();

		// TESTING
		level = 1;
		this.map = new Map(level);
		this.add(this.map);
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}