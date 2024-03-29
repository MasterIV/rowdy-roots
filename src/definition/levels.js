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
		'name': 'leveltutorial',
		'map': 'maps/leveltutorial.json',
		'shapes': [
			Shapes.corner1,
			Shapes.corner2,
			Shapes.corner3,
			Shapes.corner4,
		],
		'waves': [
			{
				'time': 40,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 1000,
						}
					]
				]
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 4,
							'delay': 700,
						}
					]
				]
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 500,
						},
						{
							'type': Enemies[4],
							'count': 2,
							'delay': 1000,
						}
					]
				]
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[2],
							'count': 1,
							'delay': 1,
						}
					]
				]
			}
		]
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
							'count': 2,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 3,
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
							'count': 2,
							'delay': 100,
						},
						{
							'type': Enemies[2],
							'count': 3,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 8,
							'delay': 850,
						}
					],
					[
						{
							'type': Enemies[1],
							'count': 2,
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
							'count': 7,
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
							'count': 4,
							'delay': 1000,
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
							'count': 4,
							'delay': 600,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 4,
							'delay': 600,
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
							'count': 10,
							'delay': 1000,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 10,
							'delay': 1000,
						},
					],
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 1,
						},
						{
							'type': Enemies[0],
							'count': 3,
							'delay': 500,
						}
					],
					[
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 1,
						},
						{
							'type': Enemies[0],
							'count': 3,
							'delay': 500,
						}
					],
				]
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 10,
						},
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 500,
						}
					],
					[
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 10,
						},
						{
							'type': Enemies[4],
							'count': 3,
							'delay': 500,
						}
					],
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[4],
							'count': 15,
							'delay': 1500,
						},
					],
					[
						{
							'type': Enemies[4],
							'count': 15,
							'delay': 1500,
						},
					],
					[
						{
							'type': Enemies[4],
							'count': 15,
							'delay': 1500,
						},
					],
				],
			},
			{
				'time': 45,
				'enemies': [
					[
						{
							'type': Enemies[3],
							'count': 1,
							'delay': 1
						}
					],
					[
						{
							'type': Enemies[3],
							'count': 1,
							'delay': 1
						}
					],
				],
			}
		],
	},
	{
		'name': 'level3',
		'map': 'maps/level3.json',
		'shapes': [
			Shapes.corner1,
			Shapes.corner2,
			Shapes.corner3,
			Shapes.corner4,
			Shapes.line3high,
			Shapes.squiggly1,
			Shapes.squiggly2,
		],
		'waves': [
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 3,
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
							'count': 2,
							'delay': 500,
						},
					],
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
							'type': Enemies[1],
							'count': 3,
							'delay': 1000,
						},
					],
					[
						{
							'type': Enemies[1],
							'count': 3,
							'delay': 1000,
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
							'count': 2,
							'delay': 250,
						},
						{
							'type': Enemies[1],
							'count': 3,
							'delay': 500,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 250,
						},
						{
							'type': Enemies[1],
							'count': 3,
							'delay': 500,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 3,
							'delay': 500,
						}
					]
				],
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 2,
							'delay': 250,
						},
						{
							'type': Enemies[2],
							'count': 3,
							'delay': 250,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 4,
							'delay': 250,
						},
						{
							'type': Enemies[2],
							'count': 2,
							'delay': 500,
						},
					],
					[
						{
							'type': Enemies[0],
							'count': 5,
							'delay': 550,
						}
					]
				],
			},
			{
				'time': 20,
				'enemies': [
					[
						{
							'type': Enemies[3],
							'count': 1,
							'delay': 1,
						}
					]
				]
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 10,
							'delay': 250,
						},
					],
					[
						{
							'type': Enemies[2],
							'count': 5,
							'delay': 750,
						},
					],
					[
						{
							'type': Enemies[1],
							'count': 7,
							'delay': 1000,
						},
					],
				]
			},
			{
				'time': 30,
				'enemies': [
					[
						{
							'type': Enemies[0],
							'count': 10,
							'delay': 250,
						},
						{
							'type': Enemies[1],
							'count': 3,
							'delay': 550,
						}
					],
					[
						{
							'type': Enemies[2],
							'count': 8,
							'delay': 750,
						},
						{
							'type': Enemies[0],
							'count': 10,
							'delay': 200,
						},
					],
					[
						{
							'type': Enemies[2],
							'count': 7,
							'delay': 1000,
						},
						{
							'type': Enemies[1],
							'count': 5,
							'delay': 500,
						}
					],
				]
			},
		],
	},
];