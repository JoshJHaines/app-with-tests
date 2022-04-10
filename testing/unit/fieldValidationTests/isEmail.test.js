const { isEmail } = require("validator");

test("Returns FALSE if blank", () => {
	expect(isEmail("")).toBe(false);
});
test("Returns FALSE with a space", () => {
    expect(isEmail(" John@gmail.com")).toBe(false);
    expect(isEmail("Jo hn@gmail.com")).toBe(false);
    expect(isEmail("John @gmail.com")).toBe(false);
});
test("Returns FALSE when missing addressee", () => {
    expect(isEmail("@gmail.com")).toBe(false);
    expect(isEmail("@bluebert.net")).toBe(false);
    expect(isEmail("@irs.gov")).toBe(false);
});
test("Returns FALSE when missing @ sign", () => {
    expect(isEmail("Johngmail.com")).toBe(false);
    expect(isEmail("Maggybluebert.net")).toBe(false);
    expect(isEmail("Flobertirs.gov")).toBe(false);
});
test("Returns FALSE when missing domain", () => {
    expect(isEmail("John#3@.com")).toBe(false);
    expect(isEmail("Maggy67@.net")).toBe(false);
    expect(isEmail("Flobert@gov")).toBe(false);
});
test("Returns FALSE when missing dot something", () => {
    expect(isEmail("John#3@gmail")).toBe(false);
	expect(isEmail("Maggy67@bluebertnet")).toBe(false);
});
test("Is Email / Contains no spaces, has addressee, has @ sign, domain, .something", () => {
	expect(isEmail("John#3@gmail.com")).toBe(true);
	expect(isEmail("Maggy@bluebert.net")).toBe(true);
	expect(isEmail("Robert.Flobert@irs.gov")).toBe(true);
});
