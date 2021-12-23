const uppercase = require("./../uppercase");
describe("uppercase", () => {
  beforeAll(() => {
    // Runs once before all tests
    console.log("before all tests");
  });
  beforeEach(() => {
    // Runs before each test
    console.log("before each test");
  });
  afterEach(() => {
    // Runs after each test
    console.log("after each test");
  });
  afterAll(() => {
    // Runs after all tests
    console.log("after all test");
  });

  test("uppercase hello returns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
  });

  test("uppercase hello returns HELLO", () => {
<<<<<<< HEAD
    let upperCase = jest.fn(() => "HELLO");
    const result = upperCase("hello");
    expect(upperCase).toHaveBeenCalledWith("hello");
=======
    uppercase = jest.fn(() => "HELLO");
    const result = uppercase("hello");
    expect(uppercase).toHaveBeenCalledWith("hello");
>>>>>>> 9b37c501aac29eb8597f967419d0518ce015a1c0
    expect(result).toBe("HELLO");
  });
});
