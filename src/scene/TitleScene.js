import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from 'tin-engine/basic/button';
import {VerticalLayout} from 'tin-engine/basic/layout'
import GameScene from './GameScene';
import CreditsScene from './CreditsScene';
import SlideInTopTransition from '../transition/SlideInTop';
import SlideInBottomTransition from '../transition/SlideInBottom';
import LevelsScene from './LevelsScene';
import HelpScene from './HelpScene';
import easing from 'tin-engine/definition/easing';
import Fonts from '../definition/fonts';

export default class TitleScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/helpbg.png';

		// create layout container to organize buttons
		this.layout = new VerticalLayout(new V2(0, 100), 0, 50);
		// add buttons to main menu
		this.layout.add(Button.create(Zero(), () => {
			this.parent.goto(new SlideInTopTransition(new LevelsScene(), 1000, easing.OUTELASTIC));
		}).img('img/button_base_normal.png').text('Levels', Fonts.button));
		this.layout.add(Button.create(Zero(), () => {
			this.parent.goto(new SlideInBottomTransition(new HelpScene(), 1000, easing.OUTELASTIC));
		}).rect(300, 50).text('Help', Fonts.button));
		this.layout.add(Button.create(Zero(), () => this.parent.goto(new CreditsScene())).rect(300, 50).text('Credits', Fonts.button));
		if (config.debug) {
			this.layout.add(Button.create(Zero(), () => this.parent.goto(new GameScene(0))).rect(300, 50).text('Debug: Level 1', Fonts.button));
		}
		// horizontally center menu on the scene
		this.center(this.layout);
	}
}
