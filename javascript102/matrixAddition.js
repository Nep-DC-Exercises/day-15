// Write a function matrixAdd which is given two two-dimensional arrays
// and returns a new two-dimensional array containing their matrix sum

arr1 = [[1, 3], [2, 4]];
arr2 = [[5, 2], [1, 0]];

function matrixAdd(arr1, arr2) {
  partArray1 = [];
  partArray2 = [];
  sumArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let a1 = arr1[i][j];
      let a2 = arr2[i][j];
      let a3 = a1 + a2;
      if (i == 0) {
        partArray1.push(a3);
      } else {
        partArray2.push(a3);
      }
    }
  }
  sumArr.push(partArray1, partArray2);
  return sumArr;
}

console.log(matrixAdd(arr1, arr2));
