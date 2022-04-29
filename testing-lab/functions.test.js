let myFunctions = require("./functions");

test("return two", () => {
  expect(myFunctions.returnTwo()).toBe(2);
});

test("greeting", () => {
  expect(myFunctions.greeting("James")).toBe("Hello James.");
  expect(myFunctions.greeting("Jill")).toBe("Hello Jill.");
});

describe("Math", () => {
  test("add nums", () => {
    expect(myFunctions.add(1, 2)).toBe(3);
  });
  test("multiply nums", () => {
    expect(myFunctions.multiply(2, 4)).toBe(8);
  });
  test("divide nums", () => {
    expect(myFunctions.divide(4, 2)).toBe(2);
  });
  test("subract nums", () => {
    expect(myFunctions.subtract(6, 2)).toBe(4);
  });
});
