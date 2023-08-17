

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  } 
  matrix.forEach((i) => {
    if (matrix.indexOf(i) % 2 !== 0) {
      i.reverse();
    }
  });
  const str = matrix.join(',');
  const arr = str.split(',');
  const res = arr.map(i => +i);
  if (res[0] == 0) {
    return [];
  } else {
    return res;
  }
} 
