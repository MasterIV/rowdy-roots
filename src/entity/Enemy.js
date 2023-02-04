import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';

const slowDuration = 2000;

export default class Enemy extends Entity {
	constructor(pos, type, target) {
		super(pos);

		this.target = target;
		this.hp = type.health;
		this.speed = type.speed;
		this.img = type.graphic;
		this.slowed = 0;

		const dist = target.dif(pos);
		this.rotation = Math.atan2(dist.y, dist.x);

		const len = Math.sqrt(dist.x*dist.x + dist.y*dist.y);
		this.direction = dist.quo(len);
	}

	harm(dmg, slow) {
		this.hp -= dmg;

		if(slow) {
			this.slow = slowDuration;
		}

		if(this.hp < 1) {
			// death animation ?
			this.parent.remove(this);
		}
	}

	update(delta) {
		if(this.slowed > 0) {
			this.slowed -= delta;
			delta *= .5;
		}

		this.position.add(this.direction.prd(this.speed * delta / 1000));
		this.distance = this.position.dist(this.target);
		if(this.distance < 100) {
			// eat the tree
			this.parent.remove(this);
		}
	}

	onDraw(ctx) {
		ctx.rotate(this.rotation);
		ctx.translate(-50, -50);
		ctx.drawImage(graphic[this.img], 0, 0);
	}
}
