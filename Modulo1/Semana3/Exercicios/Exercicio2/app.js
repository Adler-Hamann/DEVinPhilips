/*const mensagemOla = () => "Olá, Mundo!";

console.log(mensagemOla());*/

/*const mensagemOla = (nome) => `Olá, ${nome}`;

console.log(mensagemOla("Rodolfo"));*/

const mensagemOla = () => {
  let nome = document.getElementById("texto").value;
  document.getElementById("paragrafo").textContent = `Olá, ${nome}`;
  return (document.getElementById("texto").value = "");
};
