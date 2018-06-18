let SortedList = require('../sorted-list');
let expect = require('chai').expect;

describe("Test class SortedList", function () {
	let sortedList;
	beforeEach(function () {
		sortedList = new SortedList();
	});
	it("should have all of the functions in it's prototype", function () {
		expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
		expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
		expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
	});
	it("should have size property getter", function () {
		expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
		expect(typeof sortedList.size).to.not.equal('function');
	});
	it("should be empty when initialize", function () {
		expect(sortedList.size).to.equal(0);
	});
	it("should successfully add elements", function () {
		sortedList.add(5);
		sortedList.add(10);
		expect(sortedList.size).to.equal(2);
		expect(sortedList.get(0)).to.equal(5);
	});
	it("should successfully remove elements", function () {
		sortedList.add(5);
		sortedList.add(10);
		sortedList.add(15);
		sortedList.remove(1);
		expect(sortedList.size).to.equal(2);
		expect(sortedList.get(1)).to.equal(15);
	});
	it("should throw an error on attempt to remove when list is empty", function () {
		expect(function () {
			sortedList.remove(0)
		}).to.throw("Collection is empty.");
		expect(sortedList.size).to.equal(0);
	});
	it("should throw an error on attempt to remove negative index", function () {
		sortedList.add(5);
		expect(() => sortedList.remove(-3)).to.throw(Error);
		expect(sortedList.size).to.equal(1);
	});
	it("should throw an error on attempt to get when list is empty", function () {
		expect(() => sortedList.get(0)).to.throw(Error);
		expect(sortedList.size).to.equal(0);
	});
	it("should throw an error on attempt to get negative index", function () {
		sortedList.add(5);
		expect(() => sortedList.get(-3)).to.throw(Error);
		expect(sortedList.size).to.equal(1);
	});
	it("should throw an error on attempt to non-existing index", function () {
		sortedList.add(5);
		expect(() => sortedList.get(1)).to.throw(Error);
		expect(sortedList.size).to.equal(1);
	});
	it("should sort the elements after add", function () {
		sortedList.add(15);
		sortedList.add(5);
		sortedList.add(10);
		expect(sortedList.get(0)).to.equal(5);
		expect(sortedList.get(2)).to.equal(15);
	});
});