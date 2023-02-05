import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from '../ui/Button';
import {HorizontalLayout, VerticalLayout} from 'tin-engine/basic/layout'
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

		const row1 = new HorizontalLayout(Zero(), 0, 50);
		row1.add(new Button(Zero(), 'Debug: Level 1', () => {
			this.parent.goto(new GameScene(0))
		}));

		row1.add(new Button(Zero(), 'Levels', () => {
			this.parent.goto(new SlideInTopTransition(new LevelsScene(), 1000, easing.OUTELASTIC));
		}));
		this.layout.add(row1);

		const row2 = new HorizontalLayout(Zero(), 0, 50);
		row2.add(new Button(Zero(), 'Help', () => {
			this.parent.goto(new SlideInBottomTransition(new HelpScene(), 1000, easing.OUTELASTIC));
		}));

		row2.add(new Button(Zero(), 'Credits', () => {
			this.parent.goto(new CreditsScene());
		}));
		this.layout.add(row2);

		// horizontally center menu on the scene
		this.center(this.layout);
	}
}
