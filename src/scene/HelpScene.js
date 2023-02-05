import Scene from 'tin-engine/lib/scene';
import V2, {Zero} from 'tin-engine/geo/v2';
import Button from '../ui/Button';
import TextEntity from 'tin-engine/basic/text';
import Entity from 'tin-engine/basic/entity';
import ImageEntity from 'tin-engine/basic/image';
import Fonts from '../definition/fonts';
import config from '../config';
import Animation from 'tin-engine/lib/animation';
import towerData from '../definition/towers';
import enemyData from '../definition/enemies';
import GameScene from './GameScene';
import TitleScene from './TitleScene';

export default class HelpScene extends Scene {
	constructor() {
		super();
		this.setSize(config.screen.w, config.screen.h);
		
		this.bg = 'img/helpbg.png';

		this.marginLeftRight = 100;
		this.marginTop = 100;
		this.rowHeight = 90;
		this.rowSpacing = 10;

		this.pages = [
			[{
				text: 'In this tower defense game, you have to protect your tree from hungry bugs!'+
				' Build ROOTS by using sunlight to expand your footprint.'+
				' Upgrade ROOTS with forst spirits.'+
				' Forest spirits will attack incoming enemies.'+
				' Defeat all waves in a level to win.'+
				' Leave too many bugs alive that reach your tree and all your hopes will die (game over)!',
			},
			{
				image: 'img/sun_icon.png',
				text: 'You build ROOTS with sunlight.'+
				' You get 1 sunlight every second and a ROOT costs 10.'+
				' Click/Tap the Plus icon on the bottom of the screen to build a ROOT.'+
				' The ROOT will have a random shape and must be placed on non-blocking terrain.',
			},
			{
				image: 'img/water_icon.png',
				text: ' Build ROOTS on water sources to get water (1 per second).'+
				' Use this water to build spirits to defend the tree.'+
				' Click/Tap any ROOT to build a spirit.'+
				' You can select the spirit from the bottom of the screen after a ROOT is selected.',
			},],
		];
		this.pages = this.pages.concat(this.autofillTowers());
		this.pages = this.pages.concat(this.autofillEnemies());
		this.page = 0;

		this.pageContainer = new Entity();
		this.add(this.pageContainer);

		const self = this;
		this.nextButton = new Button(new V2(880, 580), 'Next Page', this.nextPage.bind(self));
		this.add(this.nextButton);

		this.previousButton = new Button(new V2(100, 580), 'Previous Page', this.previousPage.bind(self));
		this.previousButton.visible = false;
		this.add(this.previousButton);

		this.gameButton = new Button(new V2(490, 580), 'Play', () => this.parent.goto(new GameScene(1)));
		this.menuButton = new Button(new V2(880, 580), 'Menu', () => this.parent.goto(new TitleScene()));

		this.renderPage();
	}

	nextPage() {
		this.page++;
		if (this.page >= this.pages.length-1) {
			this.nextButton.visible = false;
			this.page = this.pages.length-1;
			this.add(this.menuButton);
			this.add(this.gameButton);
		}
		else {
			this.nextButton.visible = true;
		}
		this.previousButton.visible = true;
		this.renderPage();
	}

	previousPage() {
		this.page--;
		if (this.page <= 0) {
			this.previousButton.visible = false;
			this.page = 0;
		}
		else {
			this.previousButton.visible = true;
		}
		this.nextButton.visible = true;
		this.remove(this.menuButton);
		this.remove(this.gameButton);
		this.renderPage();
	}

	renderPage() {
		this.remove(this.pageContainer);
		this.pageContainer = new Entity();

		const font = Fonts.helpPage;
		const rowHeight = this.page ? this.rowHeight : 150;

		font.align = 'left';
		font.base = 'top';

		const currentPage = this.pages[this.page];
		for (let i = 0; i < currentPage.length; i++) {
			const imagePos = new V2(this.marginLeftRight, this.marginTop + (rowHeight + this.rowSpacing)*i);
			const labelPos = imagePos.clone();
			const labelSize = new V2(this.size.x - this.marginLeftRight*2, rowHeight);
			if (currentPage[i].image) {
				labelPos.x += 200;
				labelSize.x -= 200;
				this.pageContainer.add(new ImageEntity(imagePos, currentPage[i].image));
			}
			if (currentPage[i].animation) {
				labelPos.x += 200;
				labelSize.x -= 200;
				const anim = new Animation(currentPage[i].animation, imagePos, currentPage[i].frames, currentPage[i].speed, currentPage[i].loop);
				if (currentPage[i].frame) anim.frame = currentPage[i].frame;
				if (currentPage[i].state) anim.state = currentPage[i].state;
				this.pageContainer.add(anim);
			}
			const text = new TextEntity(labelPos, currentPage[i].text, font);
			text.setSize(labelSize.x, labelSize.y);
			text.wordWrap(0);
			this.pageContainer.add(text);
		}
		this.add(this.pageContainer);
	}

	autofillTowers() {
		let page = [];
		for (let i = 0; i < towerData.length; i++) {
			const entry = {};
			entry.animation = towerData[i].graphic;
			entry.frames = new V2(4, 8);
			entry.speed = 150;
			entry.loop = true;
			entry.state = 3;
			entry.text = towerData[i].name + ': ' + towerData[i].description + ' Cost: ' + towerData[i].cost.sun + ' Sun, ' + towerData[i].cost.water + ' Water.';
			page.push(entry);
		}
		return [page];
	}

	autofillEnemies() {
		let page = [];
		for (let i = 0; i < enemyData.length; i++) {
			const entry = {};
			entry.animation = enemyData[i].graphic;
			entry.frames = new V2(4, 8);
			entry.speed = 150;
			entry.loop = true;
			entry.state = 3;
			entry.text = enemyData[i].name + ': ' + enemyData[i].description;
			page.push(entry);
		}
		return [page];
	}
}
