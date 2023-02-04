import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from 'tin-engine/basic/button';
import {VerticalLayout} from 'tin-engine/basic/layout'
import GameScene from './GameScene';
import CreditsScene from './CreditsScene';
import SlideInTopTransition from '../transition/SlideInTop';
import LevelsScene from './LevelsScene';
import easing from 'tin-engine/definition/easing';

export default class TitleScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);
		// create layout container to organize buttons
		this.layout = new VerticalLayout(new V2(0, 100), 0, 50);
		// add buttons to main menu
		this.layout.add(Button.create(Zero(), () => {
			this.parent.goto(new SlideInTopTransition(new LevelsScene(), 1000, easing.OUTELASTIC));
		}).rect(300, 50).text('Levels'));
		this.layout.add(Button.create(Zero(), () => this.parent.goto(new CreditsScene())).rect(300, 50).text('Credits'));
		if (config.debug) {
			this.layout.add(Button.create(Zero(), () => this.parent.goto(new GameScene(0))).rect(300, 50).text('Debug: Level 1'));
		}
		// horizontally center menu on the scene
		this.center(this.layout);
	}

	onDraw(ctx) {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.size.x, this.size.y);
	}
}
