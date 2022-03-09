const {
	isAlpha,
	isAlphanumeric,
	isEmail,
	isStrongPassword,
} = require("validator");

test("Is Alpha", () => {
	expect(isAlpha("John")).toBe(true);
});
test("Returns FALSE with number", () => {
	expect(isAlpha("John3")).toBe(false);
});
test("Returns FALSE with a space", () => {
	expect(isAlpha(" John")).toBe(false);
});
test("Returns FALSE if blank", () => {
	expect(isAlpha("")).toBe(false);
});
