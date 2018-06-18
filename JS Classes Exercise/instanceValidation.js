class CheckingAccount {
	constructor(clientId, email, firstName, lastName) {
		this.clientId = clientId;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	get clientId() {
		return this._clientId;
	}
	
	set clientId(value) {
		let idRegex = /^\d{6}$/g;
		if (!idRegex.test(value)) {
			throw new TypeError("Client ID must be a 6-digit number");
		}
		this._clientId = value;
	}
	
	get email() {
		return this._email;
	}
	
	set email(value) {
		let emailRegex = /^\w+@[a-zA-Z.]+$/g;
		if (!emailRegex.test(value)) {
			throw new TypeError("Invalid e-mail");
		}
		this._email = value;
	}
	
	get firstName() {
		return this._firstName;
	}
	
	set firstName(value) {
		let nameRegex = /^[a-zA-Z]{3,20}$/g;
		if (value.length < 3 || value.length > 20) {
			throw new TypeError("First name must be between 3 and 20 characters long");
		}
		if (!nameRegex.test(value)) {
			throw new TypeError("First name must contain only Latin characters");
		}
		this._firstName = value;
	}
	
	get lastName() {
		return this._lastName;
	}
	
	set lastName(value) {
		let nameRegex = /^[a-zA-Z]{3,20}$/g;
		if (value.length < 3 || value.length > 20) {
			throw new TypeError("Last name must be between 3 and 20 characters long");
		}
		if (!nameRegex.test(value)) {
			throw new TypeError("Last name must contain only Latin characters");
		}
		this._lastName = value;
	}
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc);
