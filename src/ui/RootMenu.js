import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';
import graphic from 'tin-engine/core/graphic';
import fonts from '../definition/fonts';
import config from '../config';

const cost = config.rootCost;

export default class RootMenu extends Entity {
	constructor(pos, cursor, shapes, res) {
		super(pos, new V2(347, 170));

        this.cursor = cursor;
        this.shapes = shapes;
        this.res = res;
	}

    onDraw(ctx) {
        const img = this.cursor.layout == null 
            ? (this.hover() ? `img/bottom_ui_0_roots_hover.png` : `img/bottom_ui_0_roots_normal.png`) 
            : (this.hover() ? `img/bottom_ui_0_cancel_hover.png` : `img/bottom_ui_0_cancel_normal.png`);
        ctx.drawImage(graphic[img], 0, 0);

        if(this.layout == null) {
            let font = this.res.sun >= cost? fonts.costNormal : fonts.costError;
            font.apply(ctx);
            ctx.fillText(cost, 165, 145);
        }
    }

    onClick() {
        if(this.cursor.layout != null) {
            this.cursor.hide();
            this.last = this.current;
        } else if(this.res.sun >= cost) {
            this.current = this.last || this.shapes[(Math.random()*this.shapes.length)|0];
            this.cursor.setShape(this.current);
            this.last = null;
        }

        return true;
    }

    update() {
        this.visible = this.cursor.field == null;
    }

	click(pos) {
        if(this.visible) return super.click(pos);
    }
}
