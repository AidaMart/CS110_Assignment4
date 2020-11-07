function matrixProduct(mat1, mat2) {
    let newMat = [];
    for (let i = 0; i < mat1.length; ++i) {
        newMat[i] = [];
        for (let j = 0; j < mat2.length; ++j) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; ++k) {
                sum += mat1[i][k] * mat2[k][j];
            }
            newMat[i][j] = sum;
        }
    }
    return newMat;
}





function sumOfMatrices(mat1, mat2) {
    let newMat = [];
    for (let i = 0; i < mat1.length; ++i) {
        newMat[i] = [];
        for (let j = 0; j < mat2.length; ++j) {
            newMat[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return newMat;
};





function sumOfEachRow(mat) {
    let newMat = [];
    for (let i = 0; i < mat.length; ++i) {
        newMat.push(sumOfArray(mat[i]))
    }
    return newMat;
};

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
};


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
};