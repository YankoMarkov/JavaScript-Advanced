class PaymentProcessor {
	
	constructor(options) {
		this.options = options;
		this.payment = new Map();
	}
	
	
	get id() {
		return this._id;
	}
	
	set id(value) {
		if (typeof value !== 'string' || value === '') {
			throw new TypeError('Invalid id')
		}
		this._id = value;
	}
	
	get name() {
		return this._name;
	}
	
	set name(value) {
		if (typeof value !== 'string' || value === '') {
			throw new TypeError('Invalid name')
		}
		this._name = value;
	}
	
	get type() {
		return this._type;
	}
	
	set type(value) {
		this._type = value;
	}
	
	get value() {
		return this._value;
	}
	
	set value(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Invalid value')
		}
		this._value = value;
	}
	
	registerPayment(id, name, type, value) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.value = value;
		if (!this.payment.has(this.id)) {
			this.payment.set(this.id, [this.name, this.type, this.value]);
		}
	}
	
	deletePayment(id) {
		if (!this.payment.has(id)) {
			throw new TypeError('ID not found');
		}
		this.payment.delete(id);
	}
	
	get(id) {
		if (!this.payment.has(id)) {
			throw new TypeError('ID not found');
		}
		for (let [key, val] of this.payment) {
			if (key === id) {
				return `Details about payment ID: ${id}\n- Name: ${val[0]}\n- Type: ${val[1]}\n- Value: ${val[2]}`;
			}
		}
	}
	
	setOptions(options) {
		this.options = options;
	}
	
	toString() {
		let total = 0;
		for (let [key, val] of this.payment) {
			total += Number(val[2]);
		}
		return `Summary:\n- Payments: ${this.payment.size}\n- Balance: ${total}`;
	}
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));

