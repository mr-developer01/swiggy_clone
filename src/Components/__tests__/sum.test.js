import { sum } from "../sum";

test("Testing a fn for sum of two nos.", () => {
  const result = sum(4, 3);

  // Assertion
  expect(result).toBe(7);
});
