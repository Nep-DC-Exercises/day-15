// Write a function matrixMultiply which is given two two-dimensional arrays
// assume matrices are 2x2. Return result of matrix multiplication

// 1         2
// [a, b],  [e, f]
// [c, d]   [g, h]

// [a, b], [c, d]
arr1 = [[2, 4], [3, 4]];

// [e, f], [g, h]
arr2 = [[5, 2], [3, 1]];

function matrixMult(arr1, arr2) {
    let partArray1 = [];
    let partArray2 = [];
    let multArray = [];
    let a, b, c, d, e, f, g, h;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i == 0 && j == 0) {
                a = arr1[0][0];
                e = arr2[0][0];
            }
            if (i == 0 && j == 1) {
                b = arr1[0][1];
                f = arr2[0][1];
            }
            if (i == 1 && j == 0) {
                c = arr1[1][0];
                g = arr2[1][0];
            }
            if (i == 1 && j == 1) {
                d = arr1[1][1];
                h = arr2[1][1];
            }
        }
    }
    partArray1 = [a * e + b * g, a * f + b * h];
    partArray2 = [c * e + d * g, c * f + d * h];

    multArray.push(partArray1, partArray2);
    return multArray;
}

console.log(matrixMult(arr1, arr2));
