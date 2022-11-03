import Funcionario from "./Funcionarios.js";

const regex = new RegExp("^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$");
const cpf = "528.442.040-31";
if (regex.test(cpf)) {
  const pessoa = new Funcionario(cpf, "Ada Lovelace", 1000);
  console.log(pessoa);
  console.log(pessoa.porcentagem(50));
} else {
  console.log("Cpf inválido");
}
