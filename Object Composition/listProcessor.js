let command = (function () {
	let list = [];
	return {
		add: (newObj) => list.push(newObj),
		remove: (obj) => list = list.filter(a => a !== obj),
		print: () => console.log(list.toString())
	}
})();

function processCmd(arr) {
	for (let cmd of arr) {
		let [cmdName, obj] = cmd.split(" ");
		command[cmdName](obj);
	}
}

processCmd(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);