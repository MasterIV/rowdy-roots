import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import RectEntity from 'tin-engine/basic/rect';
import TextEntity from 'tin-engine/basic/text';
import ImageEntity from 'tin-engine/basic/image';
import fonts from '../definition/fonts';

const bar_length = 370;
const max_health = 10;

export default class Resources extends Entity {
	constructor(pos, resources) {
		super(pos);

        this.resources = resources;
        this.add(new ImageEntity(Zero(), 'img/roots_top.png'));

        this.add(new RectEntity(new V2(261, 25), new V2(bar_length, 46), {apply: ctx => ctx.fillStyle = '#3b2313'}));
        this.add(this.bar = new RectEntity(new V2(261, 25), new V2(bar_length, 46), {apply: this.setColor.bind(this)}));
        this.add(new ImageEntity(new V2(250, 10), 'img/progress_bar_frame.png'));
        
        this.add(new ImageEntity(new V2(100, 10), 'img/water_icon.png', .5));
        this.add(this.water = new TextEntity(new V2(180, 40), resources.water, fonts.resource));

        this.add(new ImageEntity(new V2(700, 10), 'img/sun_icon.png', .5));
        this.add(this.sun = new TextEntity(new V2(780, 40), resources.sun, fonts.resource));

        this.inheritSize();
	}

    setColor(ctx) {
        if(this.resources.hp < 4) {
            ctx.fillStyle = '#953826';
        } else if(this.resources.hp < 7) {
            ctx.fillStyle = '#e5a13f';
        } else {
            ctx.fillStyle = '#79a142';
        }
    }

    update() {
        this.bar.size.x = bar_length * (this.resources.hp / max_health);
        this.water.text = this.resources.water;
        this.sun.text = this.resources.sun;
    }
}
