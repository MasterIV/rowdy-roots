import Entity from 'tin-engine/basic/entity';
import RectEntity from 'tin-engine/basic/rect';
import V2, {Zero} from 'tin-engine/geo/v2';
import {TiledMap} from 'tin-engine/lib/map';

const layers = {
	root: 'Roots',
	tree: 'Tree',
	rock: 'Rocks',
	soil: 'Background',
	resource: 'Resources',
}

const direction = {
	left: new V2(-1, 0),
	right: new V2( 1, 0),
	up: new V2(0, -1),
	down: new V2(0,  1),
}

export default class Map extends Entity {
	constructor(map) {
		super();

		const levelDef = JSON.parse(JSON.stringify(window.maploader.data[map]));
		this.tiledMap = new TiledMap(levelDef, Zero());

		this.spawnPoints = [];
		const spawnLayer = this.tiledMap.getLayer('Spawns');
		for (let i = 0; i < spawnLayer.objects.length; i++) {
			this.spawnPoints.push([spawnLayer.objects[i].data, false]);
		}

		this.add(this.tiledMap);
		this.tiledMap.staticRender(false);
		this.inheritSize();
	}

	getPos(pixelCoordinates) {
		return this.tiledMap.toTile(pixelCoordinates);
	}

	isConnected(origin, points) {
		return points.map(p => {
			const pos = p.sum(origin);
			return this.get(layers.root, pos.sum(direction.left)) ||
				this.get(layers.root, pos.sum(direction.right)) ||
				this.get(layers.root, pos.sum(direction.down)) ||
				this.get(layers.root, pos.sum(direction.up)) 
		}).reduce((a,b) => a || b, false);
	}

	isBlocked(pos) {
		return this.get(layers.rock, pos) || this.get(layers.root, pos);
	}

	isRoot(pos) {
		return this.get(layers.root, pos);
	}

	place(origin, points) {
		const l = this.tiledMap.getLayer(layers.root);
		const d = l.data.data;

		// place new roots
		points.forEach(p => {
			const i = this.posToIndex(p.sum(origin));
			d[i] = 1;
		});

		// recalculate root connections
		for(let x = 0; x < this.tiledMap.data.width; x++)
			for(let y = 0; y < this.tiledMap.data.height; y++) {
				const p = new V2(x, y);
				const i = this.posToIndex(p);

				if(d[i]) {
					d[i] = 30 +
						1 * (d[this.posToIndex(p.sum(direction.up))] > 0) +
						2 * (d[this.posToIndex(p.sum(direction.right))] > 0) +
						4 * (d[this.posToIndex(p.sum(direction.down))] > 0) +
						8 * (d[this.posToIndex(p.sum(direction.left))] > 0);
				}
			}

		this.redraw(layers.root);
	}

	// this code should have been in the framework
	get(layer, pos) {
		if(
			pos.x < 0 || 
			pos.y < 0 || 
			pos.x >= this.tiledMap.data.width || 
			pos.y >= this.tiledMap.data.height
		) return null;

		const i = this.posToIndex(pos);
		const l = this.tiledMap.getLayer(layer);
		return l.data.data[i];

	}

	posToIndex(pos) {
		return pos.x + pos.y * this.tiledMap.data.width;
	}

	redraw(layer) {
		const l = this.tiledMap.getLayer(layer);
		const ctx = l.img.getContext('2d');
		ctx.clearRect(0, 0, l.img.width, l.img.height);
		l.render(ctx);
	}

	resetSpawnPositions() {
		for (let i = 0; i < this.spawnPoints.length; i++) {
			this.spawnPoints[i][1] = false;
		}
	}

	getRandomSpawnPosition() {
		let index = Math.floor(Math.random() * this.spawnPoints.length);
		while(this.spawnPoints[index][1]) {
			index = Math.floor(Math.random() * this.spawnPoints.length);
		}
		this.spawnPoints[index][1] = true;
		return this.spawnPoints[index][0];
	}
}
