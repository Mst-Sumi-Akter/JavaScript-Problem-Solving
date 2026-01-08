function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([5, 1, 9, 3]));



//Another way

// function findMax(arr) {
//   return Math.max(...arr);
// }

// console.log(findMax([5, 1, 9, 3])); 
