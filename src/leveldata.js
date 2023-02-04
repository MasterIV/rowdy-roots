import Shapes from './shapes';
import Enemies from './enemydata';

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
							'count': 2
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
							'count': 4
						},
						{
							'type': Enemies[0],
							'count': 4
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
							'count': 2
						},
					],
				],
			},
		],
	},
];