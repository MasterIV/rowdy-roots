import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';
import config from '../config';
import Animation from 'tin-engine/lib/animation';
import sound from 'tin-engine/core/sound';

const speed = 500;

export default class Bullet extends Entity {
	constructor(pos, type, target, enemies) {
		super(pos);

		this.target = target;
        this.type = type;
        this.enemies = enemies;
		sound.play(type.throwsound);
	}

	update(delta) {
		const dist = this.target.position.dif(this.position);
		const len = Math.sqrt(dist.x*dist.x + dist.y*dist.y);

		if(len < 40) {
			if(!this.target || !this.target.harm)
				console.log(this.target);

			this.target.harm(this.type.damage, this.type.slow);

            if(this.type.blast > 0) {
                const {w, h} = config.tile;
                this.parent.add(new Animation('img/explosion.png', this.target.position.sum(new V2(w/-2, h/-2)), 6, 50, false));

                this.enemies.bugs
                    .filter(e => e !== this.target && e.position.dist(this.target.position) < this.blast)
                    .forEach(e => e.harm(this.type.damage, this.type.slow));
            }

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
		ctx.drawImage(graphic[this.type.projectile], 0, 0);
	}
}
