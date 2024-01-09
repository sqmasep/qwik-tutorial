export const createArray = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);
