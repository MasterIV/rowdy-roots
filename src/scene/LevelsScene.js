import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from 'tin-engine/basic/button';
import {VerticalLayout, HorizontalLayout} from 'tin-engine/basic/layout'
import GameScene from './GameScene';
import Fonts from '../definition/fonts';
import levelData from '../leveldata';

export default class LevelsScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);

		const levels = levelData.length - 1;
		const rows = Math.ceil(levels / 3);
		const vertical = new VerticalLayout(new V2(0, 40), 0, 50);

		let level = 1;
		for (let i = 0; i < rows; i++) {
			const layout = new HorizontalLayout(new V2(40, 50), 0, 100);
			let buttons = 3;
			if (i == rows-1) buttons = levels % 3;
			for (let j = 0; j < buttons; j++) {
				layout
					.add(Button.create(Zero(), () => this.parent.goto(new GameScene(1)))
					.rect(300, 50)
					.text(level + ': ' + window.maploader.data[levelData[level].map].properties[0]['value'], Fonts.levelButton)
					);
				level++;
			}
			layout.align('left');
			vertical.add(layout);
			level++;
		}

		vertical.align('center');
		// horizontally center menu on the scene
		this.center(vertical);
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}
