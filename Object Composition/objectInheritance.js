function cmdProcess(arr) {
	let map = new Map();
	let cmdExec = {
		create: function ([name, inherits, parent]) {
			parent = parent ? map.get(parent) : null;
			let newObj = Object.create(parent);
			map.set(name, newObj);
		},
		set: function ([name, key, value]) {
			map.get(name)[key] = value;
		},
		print: function ([name]) {
			let obj = map.get(name);
			let res = [];
			for (let key in obj) {
				res.push(`${key}:${obj[key]}`);
			}
			console.log(res.join(", "));
		}
	};
	for (let obj of arr) {
		let tempStr = obj.split(" ");
		let key = tempStr.shift();
		cmdExec[key](tempStr);
	}
}

cmdProcess(['create c1',
	'create c2 inherit c1',
	'set c1 color red',
	'set c2 model new',
	'print c1',
	'print c2']
);
