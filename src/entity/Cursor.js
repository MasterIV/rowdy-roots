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
			w * config.tile.w / 2,
			h * config.tile.h / 2,
		);

		for(let x=0, x<w; x++)
			for(let y=0; y<h; y++)
				if(shape[y][x])
					this.layout.push(new V2(x, y));
	}

	hide() {
		this.layout = null;
	}

	draw(ctx) {
		if (this.layout) {
			const pos = this.map.getPos(self.map.relativeMouse().diff(this.offset));
			const allred = !this.map.isConnected(pos, self.layout);

			this.layout.foreEach(p => {
				const {x, y} = pos.sum(p);
				ctx.fillStyle = allred || this.map.get(x, y) ? 'rgba(255,55,55,0.5)' : 'rgba(255,255,255,0.5)';
				ctx.fillRect(x * config.tile.w, y * config.tile.h, config.tile.w, config.tile.h);
			});
		}
	}

	click(pos) {

	}
}
