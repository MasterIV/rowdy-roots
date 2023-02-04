import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Bullet from './Bullet';
import Animation from 'tin-engine/lib/animation';

export default class Turret extends Entity {
	constructor(pos, type, enemies) {
		super(pos);
		this.type = type;
		this.enemies = enemies;
		this.cooldown = 0;

		const {w, h} = config.tile;
		this.animation = new Animation(type.graphic, new V2(w/-2, h/-2), new V2(4,8), 150, true);
		this.add(this.animation);
	}

	onUpdate(delta) {
		const {w, h} = config.tile;

		if(this.target) {
			const dist = this.target.position.dif(this.position);
			const angle = Math.atan2(dist.y, dist.x);
			this.animation.state = (8 + Math.round( 4* angle / Math.PI )) % 8;
		} 

		this.cooldown -= delta;
		if(this.cooldown < 0) {
			const targets = this.enemies.bugs.filter(e => e.position.dist(this.position) < this.type.range);

			if(!targets.length) {
				// no targets in range, let's check again in 50ms
				this.cooldown = 50;
				return;
			}

			this.target = targets.reduce((a, b) => a.distance < b.distance ? a : b);
			this.parent.add(new Bullet(this.position.clone(), this.type, this.target, this.enemies));
			this.cooldown = this.type.cooldown;
		}
	}
}
