const shapes = {
	'corner1': [
		[1, 0],
		[1, 1],
	],
	'corner2': [
		[1, 1],
		[1, 0],
	],
	'corner3': [
		[1, 1],
		[0, 1],
	],
	'corner4': [
		[0, 1],
		[1, 1],
	],
	'line3wide': [
		[1, 1, 1],
	],
	'line3high': [
		[1],
		[1],
		[1],
	],
	'L1': [
		[1, 0],
		[1, 0],
		[1, 1]
	],
	'L2': [
		[1, 1, 1],
		[1, 0 ,0],
	],
	'L3': [
		[1, 1],
		[0, 1],
		[0, 1]
	],
	'L4': [
		[0, 0, 1],
		[1, 1, 1],
	],
	'reverseL1': [
		[0, 1],
		[0, 1],
		[1, 1]
	],
	'reverseL2': [
		[1, 0, 0],
		[1, 1 ,1],
	],
	'reverseL3': [
		[1, 1],
		[1, 0],
		[1, 0]
	],
	'reverseL4': [
		[1, 1, 1],
		[0, 0, 1],
	],
};

export default {
	'level1': [
		shapes.corner1,
		shapes.corner3,
		shapes.line3wide,
		shapes.line3high,
		shapes.reverseL1,
		shapes.reverseL3,
	]
};