// Define a function that removes duplicates from an array of non negative
// numbers and returns it as a result. The order of the sequence has to stay
// the same.

const numbers = [1, 2, 7, 1, 3, 2, 8];

function removeDuplicate() {
  const inOrder = new Set(numbers);
  const result = [...inOrder];
  document.getElementById("demo").innerHTML = result;
  return result;
}
removeDuplicate();
