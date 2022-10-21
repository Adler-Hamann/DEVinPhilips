const pessoa = {
  nome: "Ada",
  idade: 36,
  profissao: "Matematica",
};

const destruturarObj = ({ nome, idade, profissao } = obj) =>
  `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
console.log(destruturarObj(pessoa));
