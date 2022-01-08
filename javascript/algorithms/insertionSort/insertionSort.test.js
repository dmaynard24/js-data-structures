const { insertionSort } = require(`./insertionSort`);

test(`sorting the array [1, 5, 5, 6, 9, 8, 3] in ascending order will return [1, 3, 5, 5, 6, 8, 9]`, () => {
  const arr = [1, 5, 5, 6, 9, 8, 3];
  expect(insertionSort(arr)).toStrictEqual([1, 3, 5, 5, 6, 8, 9]);
});
test(`sorting the array [1, 5, 5, 6, 5.5, 9, 8, 3] in ascending order will return [1, 3, 5, 5, 5.5, 6, 8, 9]`, () => {
  const arr = [1, 5, 5, 6, 5.5, 9, 8, 3];
  expect(insertionSort(arr)).toStrictEqual([1, 3, 5, 5, 5.5, 6, 8, 9]);
});

test(`sorting the array [1, 5, 5, 6, 9, 8, 3] in descending order will return [9, 8, 6, 5, 5, 3, 1]`, () => {
  const arr = [1, 5, 5, 6, 9, 8, 3];
  expect(insertionSort(arr, false)).toStrictEqual([9, 8, 6, 5, 5, 3, 1]);
});

test(`sorting the array [1, 5, 5, 6, 5.5, 9, 8, 3] in descending order will return [9, 8, 6, 5.5, 5, 5, 3, 1]`, () => {
  const arr = [1, 5, 5, 6, 5.5, 9, 8, 3];
  expect(insertionSort(arr, false)).toStrictEqual([9, 8, 6, 5.5, 5, 5, 3, 1]);
});
