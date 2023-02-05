import Game from 'tin-engine/core/game';
import graphics from 'tin-engine/core/graphic';
import controls from 'tin-engine/core/controls';
import mouse from 'tin-engine/core/mouse';
import config from './config';
import TitleScene from './scene/TitleScene';
import {TiledDataLoader} from 'tin-engine/lib/map';

import enemies from './definition/enemies';
import towers from './definition/towers';

window.onload = () => {
	// Preload graphics here
	graphics.add('img/splatter.png');
	graphics.add('img/explosion.png');
	graphics.add('img/grubs.png');
	graphics.add(`img/bottom_ui_5_cancel_normal.png`);
	graphics.add(`img/bottom_ui_5_cancel_hover.png`);
	graphics.add(`img/bottom_ui_0_cancel_normal.png`);
	graphics.add(`img/bottom_ui_0_cancel_hover.png`);
	graphics.add(`img/bottom_ui_0_roots_normal.png`);
	graphics.add(`img/bottom_ui_0_roots_hover.png`);
	graphics.add(`img/helpbg.png`);
	graphics.add(`img/sun_icon.png`);
	graphics.add(`img/water_icon.png`);
	graphics.add(`img/button_base_normal.png`);
	
	enemies.forEach(e => {
		if (e.graphic) graphics.add(e.graphic);
	});

	towers.forEach(t => {
		graphics.add(t.graphic);
		graphics.add(t.projectile);
		graphics.add(`img/bottom_ui_${t.ui}_normal.png`);
		graphics.add(`img/bottom_ui_${t.ui}_hover.png`);
	});

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