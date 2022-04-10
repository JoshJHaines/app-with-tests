const { isAlpha } = require("validator");

test("Returns FALSE if blank", () => {
	expect(isAlpha("")).toBe(false);
});
test("Returns FALSE with a space", () => {
	expect(isAlpha(" John")).toBe(false);
	expect(isAlpha("Jo hn")).toBe(false);
	expect(isAlpha("John ")).toBe(false);
});
test("Returns FALSE with special characters", () => {
	expect(isAlpha("John!")).toBe(false);
	expect(isAlpha("Sh@ne")).toBe(false);
	expect(isAlpha("Sean-John")).toBe(false);
});
test("Returns FALSE with number", () => {
	expect(isAlpha("John3")).toBe(false);
	expect(isAlpha("Sh4n3")).toBe(false);
	expect(isAlpha("1John")).toBe(false);
});
test("Is Alpha / Contains no spaces, numbers, special characters, and not blank", () => {
	expect(isAlpha("John")).toBe(true);
	expect(isAlpha("Maggy")).toBe(true);
	expect(isAlpha("Flobert")).toBe(true);
});
