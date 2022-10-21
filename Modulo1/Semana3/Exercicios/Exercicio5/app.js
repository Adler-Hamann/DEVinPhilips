const somaTudo = (primeiro, ...numeros) =>
  numeros.reduce((acum, n) => acum + n, primeiro);
console.log(somaTudo(1, 1, 3, 7, 4, 2));
