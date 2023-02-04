import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import Button from 'tin-engine/basic/button';

export default class RootMenu extends Entity {
	constructor(pos, cursor, shapes) {
		super(pos);

        this.cursor = cursor;
        this.shapes = shapes;

		this.add(Button.create(Zero(), () => cursor.setShape(shapes[(Math.random()*shapes.length)|0])).rect(100, 100));
	}

    update() {
        this.visible = this.cursor.field == null && this.cursor.layout == null;
    }
}
