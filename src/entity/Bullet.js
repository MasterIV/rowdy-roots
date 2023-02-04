import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';

const speed = 500;

export default class Bullet extends Entity {
	constructor(pos, type, target) {
		super(pos);

		this.target = target;
        this.type = type;
	}

	update(delta) {
		const dist = this.target.position.dif(this.position);
		const len = Math.sqrt(dist.x*dist.x + dist.y*dist.y);

		if(len < 40) {
			// hit the bug
			this.parent.remove(this);
            return;
		}

		const dir = dist.quo(len);
		this.rotation = Math.atan2(dist.y, dist.x);
		this.position.add(dir.prd(speed * delta / 1000));

	}

	onDraw(ctx) {
		ctx.rotate(this.rotation);
		ctx.translate(-25, -25);
		ctx.drawImage(graphic['img/arrow_projectile.png'], 0, 0);
	}
}
