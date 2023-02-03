import Entity from 'tin-engine/basic/entity';
import RectEntity from 'tin-engine/basic/rect';
import V2, {Zero} from 'tin-engine/geo/v2';
import {TiledMap} from 'tin-engine/lib/map';

export default class Map extends Entity {
	constructor(level) {
		super();

		this.root = 'Roots';
		this.tree = 'Tree';
		this.rock = 'Rocks';
		this.dirt = 'Background';
		this.resource = 'Resources';
		this.mapBlockingLayers = [this.root, this.tree, this.rock];

		const levelDef = window.maploader.data[`maps/level${level}.json`];
		this.tiledMap = new TiledMap(levelDef, Zero());
		this.add(this.tiledMap);
	}

	click(pos) {

	}

	getPos(pixelCoordinates) {
		return this.tiledMap.toTile(pixelCoordinates);
	}

	isConnected(origin, points) {

	}

	place(origin, points) {

	}

	isWhat(mapCoordinates) {
		let value = this.filter(mapCoordinates, [this.root, this.tree, this.rock, this.resource], true);
		if (value === false) value = this.dirt;
		return value;
	}

	isBlocked(mapCoordinates) {
		return this.filter(mapCoordinates, this.mapBlockingLayers);
	}

	isRoot(mapCoordinates) {
		return this.filter(mapCoordinates, [this.root]);
	}

	isRock(mapCoordinates) {
		return this.filter(mapCoordinates, [this.rock]);
	}

	isTree(mapCoordinates) {
		return this.filter(mapCoordinates, [this.tree]);
	}

	isResource(mapCoordinates) {
		return this.filter(mapCoordinates, [this.resource]);
	}

	filter(mapCoordinates, layerNames, returnName) {
		let value = false;
		const index = this.getLayerDataIndexFromPos(mapCoordinates);

		layerNames.forEach(layerName => {
			const layer = this.tiledMap.getLayer(layerName);

			if (layer.data.data[index] != 0) {
				if (returnName) {
					value = layerName;
				}
				else {
					value = true;
				}
			}
		});
		return value;
	}

	getLayerDataIndexFromPos(mapCoordinates) {
		return mapCoordinates.x + mapCoordinates.y * this.tiledMap.data.width;
	}
}
