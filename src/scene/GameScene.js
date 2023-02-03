import Scene from 'tin-engine/lib/scene';
import Map from '../entity/Map';

export default class GameScene extends Scene {
	constructor() {
		super();

		this.map = new Map();
		this.add(this.map);

		// testing
		this.map.loadLevel(1);
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}