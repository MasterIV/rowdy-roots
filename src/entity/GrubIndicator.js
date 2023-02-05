import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';
import config from '../config';

const lifetime = 8000;

export default class GrubIndicator extends Entity {
	constructor(pos, target) {
		super(pos.sum(new V2(
            pos.x > target.x ? -config.tile.w : config.tile.w,
            pos.y > target.y ? -config.tile.h : config.tile.h,
        )));

		this.lifetime = lifetime;

		const dist = target.dif(this.position);
		this.rotation = Math.atan2(dist.y, dist.x);
	}

    onDraw(ctx) {
        ctx.globalAlpha = .3;
        ctx.rotate(this.rotation);
        ctx.translate(config.tile.w/-2, config.tile.h/-2);
        ctx.drawImage(graphic['img/enemy_arrow.png'], 0, 0);
    }

    update(delta) {
        this.lifetime -= delta;
        if(this.lifetime < 0) 
            this.parent.remove(this);
    }

}