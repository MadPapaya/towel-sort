module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix && matrix.length) {
    for (let i = 0; i<matrix.length; i++) {
      if (i==1 || i%2 == 1) {
        arr = arr.concat(matrix[i].reverse());
      } else {
        arr = arr.concat(matrix[i]);
      }
    }
    return arr;
  } else {
   return [];
  }
}