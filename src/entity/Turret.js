import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';
import config from '../config';
import Bullet from './Bullet';

export default class Turret extends Entity {
	constructor(pos, type, enemies) {
		super(pos);
		this.type = type;
		this.enemies = enemies;
		this.cooldown = 0;
	}

	onDraw(ctx) {
		const {w, h} = config.tile;
		let angle = 0;

		if(this.target) {
			const dist = this.target.position.dif(this.position.sum(new V2(w/2, h/2)));
			angle = Math.atan2(dist.y, dist.x);
		} 

		const frame = (8 + Math.round( 4* angle / Math.PI )) % 8;
		ctx.drawImage(graphic['img/kodama_spritesheet.png'], 0, frame*h, w, h, w/-2, h/-2, w, h);
	}

	update(delta) {
		this.cooldown -= delta;
		if(this.cooldown < 0) {
			const targets = this.enemies.entities.filter(e => e.position.dist(this.position) < this.type.range);

			if(!targets.length) {
				// no targets in range, let's check again in 50ms
				this.cooldown = 50;
				return;
			}

			this.target = targets.reduce((a, b) => a.distance > b.distance ? a : b);
			this.parent.add(new Bullet(this.position.clone(), this.type, this.target));
			this.cooldown = this.type.cooldown;
		}
	}
}
