let sharedObject = require("../sharedObject").sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML =
	`<body>
        <div id="wrapper">
            <input type="text" id="name">
            <input type="text" id="income">
        </div>
	</body>`;

describe("Test sharedObject", function () {
	before(() => global.$ = $);
	describe("Initialise name and income should be null", function () {
		it("Should return null for initial state of name", function () {
			expect(sharedObject.name).to.be.null;
		});
		it("Should return null for initial state of income", function () {
			expect(sharedObject.income).to.be.null;
		});
	});
	describe("changeName", function () {
		it("Should return number for number parameter", function () {
			sharedObject.changeName(10);
			expect(sharedObject.name).to.equal(10);
			expect($("#name").val()).to.equal("10");
		});
		it("Should return previous name for empty string parameter", function () {
			sharedObject.changeName("pesho");
			sharedObject.changeName("");
			expect(sharedObject.name).to.equal("pesho");
			expect($("#name").val()).to.equal("pesho");
		});
		it("Should return new name after calling the function more than one time", function () {
			sharedObject.changeName("pesho");
			sharedObject.changeName("gosho");
			expect(sharedObject.name).to.equal("gosho");
			expect($("#name").val()).to.equal("gosho");
		});
	});
	describe("changeIncome", function () {
		it("Should return previous value after calling with 0 parameter", function () {
			sharedObject.changeIncome(5);
			sharedObject.changeIncome(0);
			expect(sharedObject.income).to.equal(5);
			expect($('#income').val()).to.equal("5");
		});
		it("Should return correct result after calling with integer", function () {
			sharedObject.changeIncome(10);
			expect(sharedObject.income).to.equal(10);
			expect($('#income').val()).to.equal("10");
		});
		it("Should return previous value after calling with negative parameter", function () {
			sharedObject.changeIncome(5);
			sharedObject.changeIncome(-10);
			expect(sharedObject.income).to.equal(5);
			expect($('#income').val()).to.equal("5");
		});
	});
	describe("updateName", function () {
		it("Should successfully change name with non empty string", function () {
			sharedObject.changeName("pesho");
			$("#name").val("gosho");
			sharedObject.updateName();
			expect(sharedObject.name).to.equal("gosho");
			expect($("#name").val()).to.equal("gosho");
		});
		it("Should not change name with empty string", function () {
			sharedObject.changeName("pesho");
			$("#name").val("");
			sharedObject.updateName();
			expect(sharedObject.name).to.equal("pesho");
			expect($("#name").val()).to.equal("");
		});
	});
	describe("updateIncome", function () {
		it("Should return previous value if value is NaN", function () {
			sharedObject.changeIncome(15);
			$("#income").val("abc");
			sharedObject.updateIncome();
			expect(sharedObject.income).to.equal(15);
			expect($("#income").val()).to.equal("abc");
		});
		it("Should return previous value if value is floating point number", function () {
			sharedObject.changeIncome(15);
			$("#income").val("3.6");
			sharedObject.updateIncome();
			expect(sharedObject.income).to.equal(15);
			expect($("#income").val()).to.equal("3.6");
		});
		it("Should return previous value if value is negative number", function () {
			sharedObject.changeIncome(15);
			$("#income").val("-10");
			sharedObject.updateIncome();
			expect(sharedObject.income).to.equal(15);
			expect($("#income").val()).to.equal("-10");
		});
		it("Should return previous value if value is 0", function () {
			sharedObject.changeIncome(15);
			$("#income").val("0");
			sharedObject.updateIncome();
			expect(sharedObject.income).to.equal(15);
			expect($("#income").val()).to.equal("0");
		});
		it("Should return correct value id value is positive integer", function () {
			sharedObject.changeIncome(15);
			$("#income").val("20");
			sharedObject.updateIncome();
			expect(sharedObject.income).to.equal(20);
			expect($("#income").val()).to.equal("20");
		});
	});
});