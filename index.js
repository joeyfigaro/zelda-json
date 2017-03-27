const flatten = require('./lib/utils').flatten;

module.exports = {
	elixirs: flatten([
		require('./elixirs/haste.json'),
		require('./elixirs/max-stamina.json'),
		require('./elixirs/resistances.json'),
		require('./elixirs/stamina.json')
	]),
	recipes: flatten([
		require('./recipes/haste.json'),
		require('./recipes/defense.json'),
		require('./recipes/max-hearts.json'),
		require('./recipes/max-stamina.json'),
		require('./recipes/resistances.json'),
		require('./recipes/stealth.json')
	])
};