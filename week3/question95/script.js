const mat = [
  [0,1],
  [1,0]
];

const target = [
  [1,0],
  [0,1]
];

function rotateMatrix(mat) {
    const n = mat.length;
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        mat[i].reverse();
    }
    return mat;
}


console.log(rotateMatrix(mat));
