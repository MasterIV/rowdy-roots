import Entity from 'tin-engine/basic/entity';
import RectEntity from 'tin-engine/basic/rect';
import V2, {Zero} from 'tin-engine/geo/v2';
import {TiledMap} from 'tin-engine/lib/map';

export default class Map extends Entity {
	constructor() {
		super();

		this.tiledMap = null;
	}

	click(pos) {

	}

	update(delta) {

	}

	loadLevel(i) {
		const levelDef = window.maploader.data[`maps/level${i}.json`];
		this.tiledMap = new TiledMap(levelDef, Zero());
		this.add(this.tiledMap);
	}
}
