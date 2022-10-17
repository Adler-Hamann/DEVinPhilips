let popup = "";
let primos = 0;
for (let i = 0; i < 1001; i++) {
  let verificar = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      verificar++;
    }
  }
  if (verificar == 2 && primos == 0) {
    popup += `${i}`;
    primos++;
  } else if (verificar == 2) {
    popup += `, ${i}`;
    primos++;
  }
}
console.log(`${popup} \n A quantidade de números primos é ${primos}`);
