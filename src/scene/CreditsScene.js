import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from '../ui/Button';
import TextEntity from 'tin-engine/basic/text';
import {VerticalLayout} from 'tin-engine/basic/layout';
import Fonts from '../definition/fonts';
import TitleScene from './TitleScene';

export default class CreditsScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/menubg.png';

		// create layout container to organize buttons
		const layout = new VerticalLayout(new V2(0, 130), 0, 100);
		// add some credits
		layout.add(new TextEntity(Zero(), '- Konservenfabrik -', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Tobias Rojahn (Syrup)', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Felix Wagner (Armag3ddon)', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Judith Gastell (Melusine)', Fonts.credits));
		// add back button
		layout.add(new Button(Zero(), 'Back', () => this.parent.goto(new TitleScene())));
		// align items within the layout
		layout.align('center');
		// horizontally center menu on the scene
		this.center(layout);
	}
}
