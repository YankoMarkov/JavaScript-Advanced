class Point {
	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	get x() {
		return this._x;
	}
	
	set x(value) {
		this._x = value;
	}
	
	get y() {
		return this._y;
	}
	
	set y(value) {
		this._y = value;
	}
	
	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
