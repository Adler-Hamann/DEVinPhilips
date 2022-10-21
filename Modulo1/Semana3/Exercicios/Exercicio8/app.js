const uneDobraRetorna = (vetor, ...rest) => {
  for (let cont = 0; cont < rest.length; cont++) {
    rest[cont] *= 2;
  }
  return [...vetor, ...rest];
};
console.log(uneDobraRetorna([1, 4, 7], 2, 6));
console.log(uneDobraRetorna([1], 2, 6, 14, 5));
console.log(uneDobraRetorna([1, 5, 9]));
