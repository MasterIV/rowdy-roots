import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';
import fonts from '../definition/fonts';
import config from '../config';
import TextEntity from 'tin-engine/basic/text';

export default class Button extends Entity {
	constructor(pos, text, callback) {
		super(pos, new V2(326, 138));

        const txt = new TextEntity(new V2(0, 65), text, fonts.button);
        txt.hover = this.hover.bind(this);
        this.center(txt);

        this.onClick = callback;
	} 
    
    onDraw(ctx) {
        ctx.drawImage(this.hover() ? graphic['img/button_base_hover.png'] : graphic['img/button_base_normal.png'], 0, 0)
    }

	click(pos) {
        if(this.visible) return super.click(pos);
    }
}