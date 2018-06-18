(function solve() {
		
		Array.prototype.last = function () {
			return this[this.length - 1];
		};
		
		Array.prototype.skip = function (num) {
			let res = [];
			for (let i = num; i < this.length; i++) {
				res.push(this[i]);
			}
			return res;
		};
		
		Array.prototype.take = function (num) {
			let res = [];
			for (let i = 0; i < num; i++) {
				res.push(this[i]);
			}
			return res;
		};
		
		Array.prototype.sum = function () {
			let sum = 0;
			for (let el of this) {
				sum += el;
			}
			return sum;
		};
		
		Array.prototype.average = function () {
			let sum = this.sum();
			let res = sum / this.length;
			return res;
		};
	}
)();