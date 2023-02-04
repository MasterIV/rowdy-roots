import Entity from 'tin-engine/basic/entity';
import V2, {Zero} from 'tin-engine/geo/v2';

import RectEntity from 'tin-engine/basic/rect';
import TextEntity from 'tin-engine/basic/text';

export default class Resources extends Entity {
	constructor(pos, resources) {
		super(pos);

        this.resources = resources;
        this.add(new RectEntity(Zero(), new V2(200, 80)))
        
        this.add(this.hp = new TextEntity(new V2(50, 60), resources.hp));
        this.add(this.water = new TextEntity(new V2(100, 60), resources.water));
        this.add(this.sun = new TextEntity(new V2(150, 60), resources.sun));
	}

    update() {
        this.hp.text = this.resources.hp;
        this.water.text = this.resources.water;
        this.sun.text = this.resources.sun;
    }
}
