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

// function logicalCalc(array, op){
//   //your code here
//   let arr = array[0];

// for(let i = 1; i<array.length; i++){
//   if(op == "AND"){
//     arr = arr && array[i]
//   }else if (op == "OR"){
//     arr == arr || array[i]
//   }else{
//     arr = arr != array[i]
//   }
// }
//   return arr;
// }
//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
function logicalCalc(array, op) {
  var result = array[0];
  for (var i = 1; i < array.length; i++) {
    if (op == "AND") {
      result = result && array[i];
    }
    if (op == "OR") {
      result = result || array[i];
    }
    if (op == "XOR") {
      result = result != array[i];
    }
  }
  return result;
}
