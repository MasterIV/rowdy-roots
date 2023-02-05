import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Animation from 'tin-engine/lib/animation';

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
		const len = Math.sqrt(dist.x*dist.x + dist.y*dist.y);
		const angle = Math.atan2(dist.y, dist.x);
		this.direction = dist.quo(len);

		const {w, h} = config.tile;
		this.animation = new Animation(type.graphic, new V2(w/-2, h/-2), new V2(4,8), 150, true);
		this.animation.state = (8 + Math.round( 4* angle / Math.PI )) % 8;
		this.add(this.animation);
	}

	harm(dmg, slow) {
		// already dead ?
		if(this.hp < 1) return;
		
		this.hp -= dmg;

		if(slow) {
			this.slow = slowDuration;
		}

		if(this.hp < 1) {
			const {w, h} = config.tile;
			this.parent.add(new Animation('img/splatter.png', this.position.sum(new V2(w/-2, h/-2)), 5, 50, false));
			this.parent.removeEnemy(this);
		}
	}

	onUpdate(delta) {
		if(this.slowed > 0) {
			this.slowed -= delta;
			delta *= .5;
		}

		this.position.add(this.direction.prd(this.speed * delta / 1000));
		this.distance = this.position.dist(this.target);
		if(this.distance < 100) {
			this.parent.parent.parent.attack();
			this.parent.removeEnemy(this);
		}
	}
}
