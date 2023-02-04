import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import { HorizontalLayout } from 'tin-engine/basic/layout';
import Turret from '../entity/Turret';
import config from '../config';
import towers from '../definition/towers';
import graphic from 'tin-engine/core/graphic';
import fonts from '../definition/fonts';


class BuildButton extends Entity {
    constructor(img, hover, callback, cost, res) {
        super();
        this.img = graphic[img];
        this.active = graphic[hover];
        this.callback = callback;

        this.cost = cost;
        this.res = res;

        this.setSize(this.img.width, this.img.height);
    }

    onClick() {
        this.callback();
    }

    onDraw(ctx) {
        ctx.drawImage(this.hover() ? this.active : this.img, 0, 0);

        if(this.cost) {
            let font = this.res.sun >= this.cost.sun ? fonts.costNormal : fonts.costError;
            font.apply(ctx);
            ctx.fillText(this.cost.sun, 46, 142);

            font = this.res.water >= this.cost.water ? fonts.costNormal : fonts.costError;
            font.apply(ctx);
            ctx.fillText(this.cost.water, 180, 142);
        }
    }
}

export default class BuildMenu extends Entity {
	constructor(pos, cursor, res) {
		super(pos);

        this.visible = false;
        this.cursor = cursor;
        this.res = res;

        const layout = new HorizontalLayout(Zero(), 0, 0);

        towers.forEach(t => layout.add(new BuildButton(
            `img/bottom_ui_${t.ui}_normal.png`, 
            `img/bottom_ui_${t.ui}_hover.png`, 
            () => this.build(t),
            t.cost, res
        )));

        layout.add(new BuildButton(
            `img/bottom_ui_5_cancel_normal.png`, 
            `img/bottom_ui_5_cancel_hover.png`, 
            () => this.cursor.hide(),
        ));

        layout.inheritSize();

        this.add(layout);
        this.inheritSize();
	}

    build(type) {
        for(let k in type.cost) 
            if(this.res[k] < type.cost[k])
                return;

        for(let k in type.cost)
            this.res[k] -= type.cost[k];

        const {w, h} = config.tile;
        const pos = this.cursor.field.prd(w).sum(new V2(w/2, h/2));
        const tower = new Turret(pos, type, this.parent.enemies);

        this.parent.map.addTower(this.cursor.field, tower);
        this.parent.viewport.add(tower);
        this.cursor.hide();
    }

    update() {
        this.visible = this.cursor.field != null;
    }

	click(pos) {
        if(this.visible) super.click(pos);
    }
}
