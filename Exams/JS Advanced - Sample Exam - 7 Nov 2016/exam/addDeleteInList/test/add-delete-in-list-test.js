let list = require('../add-delete-in-list');
let expect = require('chai').expect;

describe("Test list", function () {
	let myData;
	beforeEach(function () {
		myData = (function () {
			return list;
		})();
	});
	it("should add data of any type", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		expect(myData.toString()).to.equal("5, pesho, true");
	});
	it("should correctly delete data with correct index", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		myData.delete(1);
		expect(myData.toString()).to.equal("5, true");
	});
	it("should return correct data fomyDatar remove at valid index", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		expect(myData.delete(1)).to.equal("pesho");
	});
	it("should return undefined if deleting non-integer index", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		expect(myData.delete(3.14)).to.equal(undefined);
	});
	it("should return undefined on attempt to delete negative index", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		expect(myData.delete(-2)).to.equal(undefined);
	});
	it("should return undefined on attempt to delete non-existing index", function () {
		myData.add(5);
		myData.add("pesho");
		myData.add(true);
		expect(myData.delete(5)).to.equal(undefined);
	});
	it("should correctly print data", function () {
		let array = [5, "gosho", true, false, 3.15];
		array.forEach(el => myData.add(el));
		expect(myData.toString()).to.equal(array.join(", "));
	});
});