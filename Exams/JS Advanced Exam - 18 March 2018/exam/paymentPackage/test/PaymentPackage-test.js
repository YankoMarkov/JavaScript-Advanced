let PaymentPackage = require('../PaymentPackage');
let expect = require('chai').expect;

describe("Test class PaymentPackage", function () {
	let paymentPackage;
	beforeEach(function () {
		let name = 'Pesho';
		let value = 20;
		paymentPackage = new PaymentPackage(name, value);
	});
	it('has functions attached to prototype', function () {
		expect(Object.getPrototypeOf(paymentPackage).hasOwnProperty('toString')).to.equal(true);
	});
	it('invalid constructor parameter', function () {
		let willThrow = () => paymentPackage = new PaymentPackage(20, 30);
		expect(willThrow).to.throw(Error);
	});
	it('name should non empty string', function () {
		let willThrow = () => paymentPackage = new PaymentPackage('', 30);
		expect(willThrow).to.throw(Error);
	});
	it('value should be positive number', function () {
		let willThrow = () => paymentPackage = new PaymentPackage('Gosho', -30);
		expect(willThrow).to.throw(Error);
	});
	it('valid constructor parameter', function () {
		let willThrow = () => paymentPackage = new PaymentPackage('Gosho', 30);
		expect(willThrow).to.not.throw(Error);
	});
	it('with valid name', function () {
		paymentPackage.name = "Gosho";
		expect(paymentPackage.name).to.equal("Gosho");
	});
	it('with valid name', function () {
		expect(typeof paymentPackage.name === 'string').to.equal(true);
	});
	it('with invalid name', function () {
		let willThrow = () => paymentPackage.name = 40;
		expect(willThrow).to.throw(Error);
	});
	it('with invalid name', function () {
		let willThrow = () => paymentPackage.name = '';
		expect(willThrow).to.throw(Error);
	});
	it('with valid value', function () {
		paymentPackage.value = 40;
		expect(paymentPackage.value).to.equal(40);
	});
	it('with valid value', function () {
		expect(typeof paymentPackage.value === 'number').to.equal(true);
	});
	it('with invalid value', function () {
		let willThrow = () => paymentPackage.value = -40;
		expect(willThrow).to.throw(Error);
	});
	it('with valid value', function () {
		paymentPackage.value = 0;
		expect(paymentPackage.value).to.equal(0);
	});
	it('with valid VAT', function () {
		paymentPackage.VAT = 20;
		expect(paymentPackage.VAT).to.equal(20);
	});
	it('with valid VAT', function () {
		paymentPackage.VAT = 0;
		expect(paymentPackage.VAT).to.equal(0);
	});
	it('with valid VAT', function () {
		expect(typeof paymentPackage.VAT === 'number').to.equal(true);
	});
	it('with invalid VAT', function () {
		let willThrow = () => paymentPackage.VAT = -30;
		expect(willThrow).to.throw(Error);
	});
	it('with valid active', function () {
		expect(typeof paymentPackage.active === 'boolean').to.equal(true);
	});
	it('with invalid active', function () {
		let willThrow = () => paymentPackage.active = 'pesho';
		expect(willThrow).to.throw(Error);
	});
	it('with invalid active', function () {
		let willThrow = () => paymentPackage.active = 20;
		expect(willThrow).to.throw(Error);
	});
	it('with valid active', function () {
		paymentPackage.active = true;
		expect(paymentPackage.active).to.equal(true);
	});
	it('with valid active', function () {
		paymentPackage.active = false;
		expect(paymentPackage.active).to.equal(false);
	});
	it('toString', function () {
		paymentPackage.name = "Gosho";
		paymentPackage.value = 40;
		paymentPackage.VAT = 20;
		paymentPackage.active = true;
		expect(paymentPackage.toString()).to.equal('Package: Gosho\n- Value (excl. VAT): 40\n- Value (VAT 20%): 48');
	});
	it('toString', function () {
		paymentPackage.name = "Gosho";
		paymentPackage.value = 40;
		paymentPackage.VAT = 20;
		paymentPackage.active = false;
		expect(paymentPackage.toString()).to.equal('Package: Gosho (inactive)\n- Value (excl. VAT): 40\n- Value (VAT 20%): 48');
	});
});