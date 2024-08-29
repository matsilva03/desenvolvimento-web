const calculaImc = (peso: number, altura: number) => {
  const IMC: number = peso / (altura * altura);
  return IMC.toFixed(2);
};

console.log(calculaImc(54.5, 1.68));
