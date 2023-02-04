import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';

export default class Turret extends Entity {
	constructor(pos) {
		super(pos);


	}

	click(pos) {

	}

	onDraw(ctx) {
		const dist = this.parent.relativeMouse().dif(this.position);
		ctx.rotate(Math.atan2(dist.y, dist.x));
		ctx.translate(-50, -50);
		ctx.drawImage(graphic['img/tower.png'], 0, 0);
	}

	update(delta) {

	}
}
