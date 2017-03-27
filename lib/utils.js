const scalar = v => !Array.isArray(v);

const flatten = (deep, flat = []) => {
	if (deep.length === 0) return flat;
	
	let [head, ...tail] = deep;
	
	if (scalar(head)) {
		return flatten(tail, flat.concat(head));
	} else {
		return flatten(tail, flat.concat(flatten(head)));
	}
}

module.exports = { scalar, flatten };