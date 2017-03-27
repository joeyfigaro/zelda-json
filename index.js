const elixirs = {
	require('./elixirs/haste.json'),
	require('./elixirs/max-stamina.json'),
	require('./elixirs/resistances.json'),
	require('./elixirs/stamina.json')
};

const recipes = [
	require('./recipes/haste.json'),
	require('./recipes/defense.json'),
	require('./recipes/max-hearts.json'),
	require('./recipes/max-stamina.json'),
	require('./recipes/resistances.json'),
	require('./recipes/stealth.json')
};

module.exports = { elixirs: elixirs, recipes: recipes };