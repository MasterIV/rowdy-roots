import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import Button from 'tin-engine/basic/button';

export default class CancelButton extends Entity {
	constructor(pos, cursor) {
		super(pos);
        this.cursor = cursor;
		this.add(Button.create(Zero(), () => cursor.hide()).rect(100, 100));
	}

    update() {
        this.visible = this.cursor.field != null || this.cursor.layout != null;
    }
}
