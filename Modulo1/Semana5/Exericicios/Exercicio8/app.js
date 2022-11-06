import Usuario from "./Usuario.js";

const submito = (event) => {
  event.preventDefault();
  const teste = new Usuario("sample", "Ena", "chute");
  if (teste.autenticar(document.getElementById("email").value, document.getElementById("senha").value)) {
    alert("Sucesso");
  } else {
    alert("Acesso negado");
  }
};

document.getElementById("form").addEventListener("submit", submito);
