function processCommands(commands) {
	let commandProcessor = (function () {
		let text = "";
		return {
			append: (newText) => text += newText,
			removeStart: (num) => text = text.slice(Number(num)),
			removeEnd: (num) => text = text.slice(0, text.length - Number(num)),
			print: () => console.log(text)
		}
	})();
	
	for (let command of commands) {
		let [cmdName, arg] = command.split(" ");
		commandProcessor[cmdName](arg);
	}
}

processCommands(['append hello',
	'append again',
	'removeStart 3',
	'removeEnd 4',
	'print']
);