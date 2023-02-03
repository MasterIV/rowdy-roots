import Scene from 'tin-engine/lib/scene';

export default class GameScene extends Scene {
		constructor() {
		super();
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}