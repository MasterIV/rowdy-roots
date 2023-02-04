import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import Button from 'tin-engine/basic/button';
import { HorizontalLayout } from 'tin-engine/basic/layout';
import Turret from '../entity/Turret';
import config from '../config';
import towerdata from '../towerdata';

export default class BuildMenu extends Entity {
	constructor(pos, cursor) {
		super(pos);

        this.visible = false;
        this.cursor = cursor;

        const layout = new HorizontalLayout(Zero(), 0, 50);
        towerdata.forEach(type => layout.add(Button.create(Zero(), () => this.build(type)).rect(200, 100)));
        layout.inheritSize();

        this.add(layout);
        this.inheritSize();
	}

    build(type) {
        // check resources
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
}
