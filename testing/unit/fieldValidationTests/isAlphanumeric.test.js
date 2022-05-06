const { isAlphanumeric } = require("validator");

describe("Returns FALSE if blank", () => {
	test("Empty", () => {
		expect(isAlphanumeric("")).toBe(false);
	});
});
test("Returns FALSE with a space", () => {
    expect(isAlphanumeric(" John")).toBe(false);
	expect(isAlphanumeric("Jo hn")).toBe(false);
	expect(isAlphanumeric("John ")).toBe(false);
});
test("Returns FALSE with special characters", () => {
	expect(isAlphanumeric("John!")).toBe(false);
	expect(isAlphanumeric("Sh@ne")).toBe(false);
	expect(isAlphanumeric("Sean-John")).toBe(false);
});
test("Returns true with number", () => {
    expect(isAlphanumeric("John3")).toBe(true);
    expect(isAlphanumeric("J0hn")).toBe(true);
    expect(isAlphanumeric("Sh4n3")).toBe(true);
    expect(isAlphanumeric("1")).toBe(true);
    expect(isAlphanumeric("2")).toBe(true);
});
test("Is Alphanumeric / Contains no spaces, special characters, and not blank", () => {
	expect(isAlphanumeric("John")).toBe(true);
	expect(isAlphanumeric("Maggy")).toBe(true);
	expect(isAlphanumeric("Flobert")).toBe(true);
});
