const elixirs = {
	haste: require('./elixirs/haste.json'),
	'max-stamina': require('./elixirs/max-stamina.json'),
	resistances: require('./elixirs/resistances.json'),
	stamina: require('./elixirs/stamina.json')
};

const recipes = {
	haste: require('./recipes/haste.json'),
	defense: require('./recipes/defense.json'),
	'max-hearts': require('./recipes/max-hearts.json'),
	'max-stamina': require('./recipes/max-stamina.json'),
	resistances: require('./recipes/resistances.json'),
	stealth: require('./recipes/stealth.json')
};

module.exports = { elixirs: elixirs, recipes: recipes };