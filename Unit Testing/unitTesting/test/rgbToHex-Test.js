let rgbToHexColor = require("../rgbToHex").rgbToHexColor;
let expect = require("chai").expect;

describe("Test rgbToHexColor(red, green, blue)", function () {
	describe("Nominal cases(valid input)", function () {
		it("should return #FF9EAA for (255, 158, 170)", function () {
			expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
		});
		it("should return #0C0D0E for (12, 13, 14)", function () {
			expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
		});
		it("Should return #000000 for (0, 0, 0)", function () {
			expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
		});
		it("Should return #FFFFFF for (255, 255, 255)", function () {
			expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
		});
	});
	describe("Special cases(invalid input)", function () {
		it("Should return undefined for (-1,0,0)", function () {
			expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,-1,0)", function () {
			expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,0,-1)", function () {
			expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
		});
		it("Should return undefined for (256,0,0)", function () {
			expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,256,0)", function () {
			expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,0,256)", function () {
			expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
		});
		it("Should return undefined for (3.14,0,0)", function () {
			expect(rgbToHexColor(3.14, 0, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,3.14,0)", function () {
			expect(rgbToHexColor(0, 3.14, 0)).to.equal(undefined);
		});
		it("Should return undefined for (0,0,3.14)", function () {
			expect(rgbToHexColor(0, 0, 3.14)).to.equal(undefined);
		});
		it('Should return undefined for ("5", [3], {8:9})', function () {
			expect(rgbToHexColor("5", [3], {8: 9})).to.equal(undefined);
		});
		it("Should return undefined for empty input", function () {
			expect(rgbToHexColor()).to.equal(undefined);
		});
	});
});