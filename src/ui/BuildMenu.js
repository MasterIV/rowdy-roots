import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import Button from 'tin-engine/basic/button';
import { HorizontalLayout } from 'tin-engine/basic/layout';
import Turret from '../entity/Turret';
import config from '../config';

const dummyType = {
    damage: 4,
    range: 350,
    cooldown: 500,
    slow: false,
    blast: 50
}

export default class BuildMenu extends Entity {
	constructor(pos, cursor) {
		super(pos);

        this.visible = false;
        this.cursor = cursor;

        const layout = new HorizontalLayout(Zero(), 0, 50);
        layout.add(Button.create(Zero(), () => this.build(dummyType)).rect(200, 100));
        layout.add(Button.create(Zero(), () => this.build(dummyType)).rect(200, 100));
        layout.add(Button.create(Zero(), () => this.build(dummyType)).rect(200, 100));
        layout.add(Button.create(Zero(), () => this.build(dummyType)).rect(200, 100));
        layout.inheritSize();

        this.add(layout);
        this.inheritSize();
	}

    build(type) {
        // check 
        const {w, h} = config.tile;
        const pos = this.cursor.field.prd(w).sum(new V2(w/2, h/2));

        this.parent.viewport.add(new Turret(pos, type, this.parent.enemies));
        this.cursor.hide();
    }

    update() {
        this.visible = this.cursor.field != null;
    }
}
