/* exercicio:
calcular preço de uma viagem, utilizando 5 variáveis e a estrutura de repetição if else */

const priceGasolina = 4.88;
const priceEtanol = 3.77;
const kmperLiter = 11;
const kmDistance = 1777;
const fuelType = 'Etanol';

const litersConsumed = kmDistance / kmperLiter;

if (fuelType === "Etanol") {
    const cost = litersConsumed * priceEtanol;
    console.log(cost.toFixed(2));
} else {
    const cost = litersConsumed * priceGasolina;
    console.log(cost.toFixed(2));
}




