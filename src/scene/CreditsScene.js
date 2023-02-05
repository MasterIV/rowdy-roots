import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from 'tin-engine/basic/button';
import TextEntity from 'tin-engine/basic/text';
import {VerticalLayout} from 'tin-engine/basic/layout';
import Fonts from '../definition/fonts';

export default class CreditsScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/helpbg.png';

		// create layout container to organize buttons
		const layout = new VerticalLayout(new V2(0, 200), 0, 100);
		// add some credits
		layout.add(new TextEntity(Zero(), '- Konservenfabrik -', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Tobias Rojahn (Syrup) - Code, Art Support', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Felix Wagner (Armag3ddon) - Code, Game Design', Fonts.credits));
		layout.add(new TextEntity(Zero(), 'Judith Gastell (Melusine) - Art', Fonts.credits));
		// add back button
		layout.add(Button.create(Zero(), () => this.parent.goto(this.previous)).rect(300, 50).text('Back', Fonts.button));
		// align items within the layout
		layout.align('center');
		// horizontally center menu on the scene
		this.center(layout);
	}

	setParent(game) {
		// this is called before the scene gets set to the new value
		this.previous = game.scene;
		super.setParent(game);
	}
}
