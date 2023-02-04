import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';

export default class Enemy extends Entity {
	constructor(pos, type, target) {
		super(pos);

		this.target = target;
		this.hp = type.hp;
		this.speed = type.speed;
		this.slowed = 0;

		const dist = target.dif(pos);
		this.rotation = Math.atan2(dist.y, dist.x);

		const len = Math.sqrt(dist.x*dist.x + dist.y*dist.y);
		console.log(dist, len);
		this.direction = dist.quo(len);
		console.log(this.direction);
	}

	update(delta) {
		this.position.add(this.direction.prd(this.speed * delta / 1000));

	}

	onDraw(ctx) {
		ctx.rotate(this.rotation);
		ctx.translate(-50, -50);
		ctx.drawImage(graphic['img/bug.png'], 0, 0);
	}
}
