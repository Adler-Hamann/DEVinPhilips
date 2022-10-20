const Objeto1 = {
  Carro: "Fusca",
  Cor: "Branco",
};

const Objeto2 = {
  Fruta: "Maçã",
  Sabor: "Doce",
};

const mesclaObjetos = (a, b) => {
  const c = { ...a, ...b };
  return c;
};
console.log(mesclaObjetos(Objeto1, Objeto2));
