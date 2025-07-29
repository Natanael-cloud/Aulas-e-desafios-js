/*exercicio:
calcular preço de uma viagem */

const priceGas = 4.88;
const  kmperLiter = 11;
const  kmDistance = 1777;

const  litersConsumed = kmDistance / kmperLiter;
const  cost = litersConsumed * priceGas;

console.log(cost.toFixed(2));

/*resultado no terminal: 788.34 */