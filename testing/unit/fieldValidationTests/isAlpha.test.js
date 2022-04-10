const { isAlpha } = require("validator");

describe("Returns FALSE if blank", () => {
	test("Empty", () => {
		expect(isAlpha("")).toBe(false);
	});
});

describe("Returns FALSE with a space", () => {
	test("Space at beginning", () => {
		expect(isAlpha(" John")).toBe(false);
	});
	test("Space in the middle", () => {
		expect(isAlpha("Jo hn")).toBe(false);
	});
	test("Space at end", () => {
		expect(isAlpha("John ")).toBe(false);
	});
	test("Only a Space", () => {
		expect(isAlpha(" ")).toBe(false);
	});
});

describe("Returns FALSE with special characters", () => {
	test("Special Character at beginning", () => {
	expect(isAlpha("!John")).toBe(false);
	});
	test("Special Character at end", () => {
		expect(isAlpha("John!")).toBe(false);
	});
	test("Special Character replacing letters", () => {
	expect(isAlpha("Sh@ne")).toBe(false);
	});
	test("Only a Special Character", () => {
		expect(isAlpha("^")).toBe(false);
	});
});

describe("Returns FALSE with number", () => {
	test("Number at end", () => {
		expect(isAlpha("John3")).toBe(false);
	});
	test("Numbers replacing letters", () => {
		expect(isAlpha("Sh4n3")).toBe(false);
	});
	test("Number at the beginning", () => {
		expect(isAlpha("1John")).toBe(false);
	});
	test("Only a number", () => {
		expect(isAlpha("1")).toBe(false);
	});
});

describe("Is Alpha / Contains no spaces, numbers, special characters, and not blank", () => {
	test("John", () => {
		expect(isAlpha("John")).toBe(true);
	});
	test("Maggy", () => {
		expect(isAlpha("Maggy")).toBe(true);
	});
	test("Flobert", () => {
		expect(isAlpha("Flobert")).toBe(true);
	});
});
