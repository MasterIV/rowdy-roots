import Entity from 'tin-engine/basic/entity';
import RectEntity from 'tin-engine/basic/rect';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';

export default class Cursor extends Entity {
	constructor(map) {
		super();
		this.layout = null;
		this.offset = null;
		this.map = map;
	}

	setShape(shape) {
		this.layout = [];

		const w = shape[0].length;
		const h = shape.length;

		this.offset = new V2(
			Math.floor(w / 2) * config.tile.w ,
			Math.floor(h / 2) * config.tile.h ,
		);

		for(let x=0; x<w; x++)
			for(let y=0; y<h; y++)
				if(shape[y][x])
					this.layout.push(new V2(x, y));
	}

	hide() {
		this.layout = null;
	}

	draw(ctx) {
		if (this.layout) {
			const pos = this.map.getPos(this.map.relativeMouse().dif(this.offset));
			const allred = !this.map.isConnected(pos, this.layout);

			this.layout.forEach(p => {
				const dst = pos.sum(p);
				ctx.fillStyle = allred || this.map.isBlocked(dst) ? 'rgba(255,55,55,0.5)' : 'rgba(255,255,255,0.5)';
				ctx.fillRect(dst.x * config.tile.w, dst.y * config.tile.h, config.tile.w, config.tile.h);
			});
		}
	}

	click() {
		if (this.layout) {
			const pos = this.map.getPos(this.map.relativeMouse().dif(this.offset));
			const connected = this.map.isConnected(pos, this.layout);
			const blocked = this.layout.map(p => this.map.isBlocked(pos.sum(p))).reduce((a,b) => a || b, false);

			if(connected && !blocked) {
				this.map.place(pos, this.layout);
				this.hide();
				return true;
			}
		}
	}
}
