import Game from 'tin-engine/core/game';
import graphics from 'tin-engine/core/graphic';
import controls from 'tin-engine/core/controls';
import mouse from 'tin-engine/core/mouse';
import config from './config';
import TitleScene from './scene/TitleScene';
import {TiledDataLoader} from 'tin-engine/lib/map';

window.onload = () => {
	// Preload graphics here
	graphics.add('img/kodama_spritesheet.png');
	graphics.add('img/arrow_projectile.png');
	graphics.add('img/bug.png');
	graphics.add('img/grub.png');

	window.maploader = new TiledDataLoader();
	window.maploader.preloadCompleteJSON('maps/level1.json', () => {
		graphics.load(() => {
			document.getElementById('loading').style.display = 'none';

			const game = new Game(config, document.getElementById('gameframe'));

			controls.init(game);
			mouse.init(game);

			game.run(new TitleScene());
			// debug
			window.game = game;
		})
	});
};