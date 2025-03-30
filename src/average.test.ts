import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 6];
  const expected: number = 4;

  // Acta
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 6, 3, 5, 4];
  const expected: number = 4;

  // Acta
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrowError("Cannot calculate mean of an empty list");
});