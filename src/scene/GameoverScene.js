import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import config from '../config';
import Button from '../ui/Button';
import ImageEntity from 'tin-engine/basic/image';
import TitleScene from './TitleScene';

export default class GameoverScene extends Scene {
	constructor() {
		super();
		// initialize size to use the center method
		this.setSize(config.screen.w, config.screen.h);
		this.bg = 'img/helpbg.png';

		this.add(new ImageEntity(new V2(269, 0), 'img/game_over_screen.png'));
		this.add(new Button(new V2(490, 580), 'Menu', () => this.parent.goto(new TitleScene())));
	}
}
