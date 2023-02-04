import TransitionScene from 'tin-engine/lib/transition';

export default class SlideInTopTransition extends TransitionScene {
	constructor(toScene, duration, easing) {
		super(toScene, duration, easing);
	}

	performTransition(ctx) {
		const offset = this.progress * this.size.y;
		ctx.drawImage(this.fromBuffer.buffer, 0, offset);
		ctx.drawImage(this.toBuffer.buffer, 0, -this.size.y + offset);
	}
}

// TODO: add to tin-engine