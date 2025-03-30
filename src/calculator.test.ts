import { add, multiplied, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 4;
  const b: number = 3;
  const expected: number = 7;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiplie three and two is six", () => {
  // Arrange
  const a: number = 3;
  const b: number = 2;
  const expected: number = 6;

  // Act
  const actual: number = multiplied(a, b);

  // Assert
  expect(actual).toBe(expected);
});

