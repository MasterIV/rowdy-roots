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
		],
	},
];