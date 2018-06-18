class Stringer {
	constructor(innerString, innerLength) {
		this.innerString = innerString;
		this.innerLength = innerLength;
	}
	
	increase(length) {
		this.innerLength += length;
	}
	
	decrease(length) {
		this.innerLength -= length;
		if (this.innerLength < 0) {
			this.innerLength = 0;
		}
	}
	
	toString() {
		let str = this.innerString;
		if (this.innerLength === 0) {
			return "...";
		}
		if (this.innerLength < this.innerString.length) {
			str = this.innerString.substr(0, this.innerLength) + "...";
		}
		return str;
	}
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
