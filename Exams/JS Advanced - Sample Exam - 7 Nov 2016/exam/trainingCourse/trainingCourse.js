class TrainingCourse {
	constructor(title, trainer) {
		this.title = title;
		this.trainer = trainer;
		this.topics = [];
	}
	
	get firstTopic() {
		return this.topics[0];
	}
	
	get lastTopic() {
		return this.topics[this.topics.length - 1];
	}
	
	addTopic(title, date) {
		this.topics.push({
			title,
			date
		});
		this.topics.sort((a, b) => new Date(a.date) - new Date(b.date));
		return this;
	}
	
	toString() {
		let output = `Course "${this.title}" by ${this.trainer}`;
		if (this.topics.length > 0) {
			this.topics.forEach(t => output += `\n * ${t.title} - ${t.date}`);
		} else {
			output += "\n";
		}
		return output;
	}
}

let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));
console.log(test.toString());

