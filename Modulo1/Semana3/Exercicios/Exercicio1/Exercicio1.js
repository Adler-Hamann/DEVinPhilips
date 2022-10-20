const procuraMinMax = (array) => {
  if (array) {
    array.sort((a, b) => a - b);
    if (!isNaN(array[0] && array[array.length - 1])) {
      return `Menor: ${array[0]}, Maior: ${array[array.length - 1]}`;
    } else {
      return "Entrada inválida";
    }
  } else {
    return "Entrada inválida";
  }
};

console.log(
  procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47])
);
console.log(procuraMinMax([]));
console.log(procuraMinMax([1]));
console.log(procuraMinMax([1, -1]));
console.log(procuraMinMax(null));
console.log(procuraMinMax([-2, -2, -2, -2]));
console.log(procuraMinMax([20, 10, 30]));
