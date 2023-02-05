export default [
	{
		'id': 0,
		'name': 'Spear Chugger',
		'description': 'The humble default. Average speed, range and damage.',
		'graphic': 'img/kodama_spritesheet.png',
		'projectile': 'img/arrow_projectile.png',
		'ui': '1_spear',
		'damage': 5,
		'range': 350,
		'cooldown': 1500,
		'slow': false,
		'blast': 0,
		'cost': {sun: 0, water: 10},
	},
	{
		'id': 2,
		'name': 'Bomb Hauler',
		'description': 'Slow firing and less damage than the default but damages a whole area instead of one bug!',
		'graphic': 'img/kodama_aoe_spritesheet.png',
		'projectile': 'img/aoe_projectile.png',
		'ui': '2_aoe',
		'damage': 5,
		'range': 350,
		'cooldown': 1500,
		'slow': false,
		'blast': 100,
		'cost': {sun: 5, water: 50},
	},
	{
		'id': 1,
		'name': 'Slime Thrower',
		'description': 'Less damage, slower rate of fire but slows down any enemy that was hit.',
		'graphic': 'img/kodama_slow_spritesheet.png',
		'projectile': 'img/ice_projectile.png',
		'ui': '3_slow',
		'damage': 8,
		'range': 350,
		'cooldown': 2000,
		'slow': true,
		'blast': 0,
		'cost': {sun: 5, water: 50},
	},
	{
		'id': 3,
		'name': 'Precision Leafer',
		'description': 'True long range specialist! Slowest rate of fire but highest damage and longest range.',
		'graphic': 'img/kodama_sniper_spritesheet.png',
		'projectile': 'img/seeds_projectile.png',
		'ui': '4_sniper',
		'damage': 20,
		'range': 550,
		'cooldown': 3000,
		'slow': false,
		'blast': 0,
		'cost': {sun: 10, water: 50},
	},
]