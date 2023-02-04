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
		this.tiledMap.staticRender(false);

		this.inheritSize();
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

	// connections = { left: true, right: false, up: true, down: false }
	getRootIndex(connections) {
		let index = 0;
		if (connections.up) index += 1;
		if (connections.right) index += 2;
		if (connections.down) index += 4;
		if (connections.left) index += 8;
		if (index != 0) {
			let t;
			for (const i in this.tiledMap.tilesets) {
				if (this.tiledMap.tilesets[i].name == 'Roots') {
					t = this.tiledMap.tilesets[i];
				}
			}
			if (!t) {
				console.error('Current level does not include tilesets "Roots"!');
			}
			else {
				index += t.firstgid - 1;
			}
		}
		return index;
	}

	setRoot(mapCoordinates, rootIndex) {
		const index = this.getLayerDataIndexFromPos(mapCoordinates);
		const layer = this.tiledMap.getLayer(this.root);

		layer.data[index] = rootIndex;

		const ctx = layer.img.getContext('2d');
		ctx.clearRect(0, 0, layer.img.width, layer.img.height);

		layer.staticRender(layer.img);
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
