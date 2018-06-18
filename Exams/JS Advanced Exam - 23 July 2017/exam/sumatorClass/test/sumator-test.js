let Sumator = require('../sumator').Sumator;
let expect = require('chai').expect;

describe("Test class Sumator", function () {
	let sumator;
	beforeEach(function () {
		sumator = new Sumator();
	});
	it("Has properties", function () {
		expect(sumator.hasOwnProperty('data')).to.equal(true)
	});
	it('Has functions attached to prototype', function () {
		expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true);
		expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true);
		expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true);
		expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true);
	});
	it("Initialize empty array", function () {
		expect(sumator.data instanceof Array).to.equal(true);
		expect(sumator.data.length).to.equal(0);
	});
	it("Should add elements to array", function () {
		sumator.add(10);
		expect(sumator.data.length).to.equal(1);
		sumator.add('pesho');
		expect(sumator.data.length).to.equal(2);
		sumator.add([1, 2, 3]);
		expect(sumator.data.length).to.equal(3);
	});
	it("SumNums return 0 when array is empty", function () {
		expect(sumator.sumNums()).to.equal(0);
	});
	it("correct sumNumbers", function () {
		sumator.add(5);
		sumator.add(10);
		expect(sumator.sumNums()).to.equal(15);
	});
	it("Not correct all element sumNumbers", function () {
		sumator.add(5);
		sumator.add('pesho');
		sumator.add(3);
		expect(sumator.sumNums()).to.equal(8);
	});
	it("Remove all matching element", function () {
		sumator.add(5);
		sumator.add('pesho');
		sumator.add(3);
		sumator.removeByFilter((e) => e === 5);
		expect(sumator.data).to.not.contains(5);
	});
	it("Should return empty toString with empty array", function () {
		expect(sumator.toString()).to.equal('(empty)');
	});
	it("toString with correct element", function () {
		sumator.add(5);
		sumator.add('pesho');
		sumator.add(10);
		expect(sumator.toString()).to.equal('5, pesho, 10');
	});
});