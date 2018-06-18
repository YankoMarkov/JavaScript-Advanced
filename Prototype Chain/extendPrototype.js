class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	
	toString() {
		let className = this.constructor.name;
		return `${className} (name: ${this.name}, email: ${this.email})`;
	}
}

class Teacher extends Person {
	constructor(name, email, subject) {
		super(name, email);
		this.subject = subject;
	}
	
	toString() {
		let baseStr = super.toString().slice(0, -1);
		return `${baseStr}, subject: ${this.subject})`;
	}
}

class Student extends Person {
	constructor(name, email, course) {
		super(name, email);
		this.course = course;
	}
	
	toString() {
		let baseStr = super.toString().slice(0, -1);
		return `${baseStr}, course: ${this.course})`;
	}
}

let person = new Person("maria", "mar@aha.com");
let teacher = new Teacher("gosho", "gosh@aha.com", "biology");
let student = new Student("ivan", "ivan@aha.com", "java");

console.log('' + person);
console.log(teacher.toString());
console.log('' + student);

function solve(baseClass) {
	baseClass.prototype.species = "Human";
	baseClass.prototype.toSpeciesString = function () {
		return `I am a ${this.species}. ${this.toString()}`;
	};
}
solve(Person);

console.log(person.toSpeciesString);
console.log(teacher.toSpeciesString);
console.log(student.toSpeciesString);
