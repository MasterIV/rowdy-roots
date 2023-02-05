import Shapes from './shapes';
import Enemies from './enemies';

export default [
	{
		'name': 'level_test',
		'map': 'maps/level1.json',
		'shapes': [
			Shapes.corner1,
			Shapes.corner3,
			Shapes.line3wide,
			Shapes.line3high,
			Shapes.reverseL1,
			Shapes.reverseL3,
		],
		'waves': [
			{
				'time': 1,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 500,
						},
					],
				],
			},
			{
				'time': 3,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 4,
							'delay': 500,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 4,
							'delay': 500,
						},
					],
				],
			},
		],
	},
	{
		'name': 'level1',
		'map': 'maps/level1.json',
		'shapes': [
			Shapes.corner1,
			Shapes.corner3,
			Shapes.line3wide,
			Shapes.line3high,
			Shapes.reverseL1,
			Shapes.reverseL3,
		],
		'waves': [
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 500,
						},
					],
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 6,
							'delay': 600,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 750,
						},
					],
					[
						{
							'type': Enemies[2],
							'count': 1,
							'delay': 0,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 300,
						},
						{
							'type': Enemies[2],
							'count': 2,
							'delay': 1000,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 500,
						}
					],
				]
			},
			{
				'time': 10,
				'enemies': [
					[
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 700,
						}
					],
					[
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 350,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 300,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 850,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 750,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 20,
							'delay': 500,
						}
					],
				],
			}
		],
	},
	{
		'name': 'level2',
		'map': 'maps/level2.json',
		'shapes': [
			Shapes.line3wide,
			Shapes.line3high,
			Shapes.line4wide,
			Shapes.line4high,
			Shapes.L1,
			Shapes.L3,
			Shapes.reverseL2,
			Shapes.reverseL4,
		],
		'waves': [
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 500,
						},
					],
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 6,
							'delay': 600,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 750,
						},
					],
					[
						{
							'type': Enemies[2],
							'count': 1,
							'delay': 0,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 300,
						},
						{
							'type': Enemies[2],
							'count': 2,
							'delay': 1000,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 12,
							'delay': 500,
						}
					],
				]
			},
			{
				'time': 10,
				'enemies': [
					[
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 700,
						}
					],
					[
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 350,
						},
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						},
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 350,
						}
					],
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 300,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 850,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 4,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 11,
							'delay': 750,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 20,
							'delay': 500,
						}
					],
				],
			}
		],
	},
];