let makeList = require('../list-add-left-right-clear');
let expect = require('chai').expect;

describe("Test makeList()", function () {
	let myList = {};
	beforeEach(function () {
		myList = makeList();
	});
	it("should contain all properties", function () {
		expect(myList.addLeft).to.exist;
		expect(myList.addRight).to.exist;
		expect(myList.clear).to.exist;
		expect(myList.toString).to.exist;
	});
	it('should adds item at the end of the list', function () {
		myList.addRight(10);
		myList.addRight('pesho');
		myList.addRight(5);
		expect(myList.toString()).to.equal('10, pesho, 5');
	});
	it('should adds item at the beginning of the list', function () {
		myList.addLeft(10);
		myList.addLeft('pesho');
		myList.addLeft(5);
		expect(myList.toString()).to.equal('5, pesho, 10');
	});
	it('should removes all elements in the list', function () {
		myList.addLeft(10);
		myList.addLeft('pesho');
		myList.addLeft(5);
		myList.clear();
		expect(myList.toString()).to.equal('');
	});
});