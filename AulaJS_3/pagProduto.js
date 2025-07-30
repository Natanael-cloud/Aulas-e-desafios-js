const precoProduto = 77;

// Opções de pagamento //
const debito = 'debito';
const dinheiroPix = 'dinheiroPix';
const duasVezes = 'duasVezes';
const acimaDeDuasVezes = 'acimaDeDuasVezes';

// Escolha atual de pagamento
let pgtoAtual = debito;

let precoFinal;

if (pgtoAtual === debito) {
    precoFinal = precoProduto * 0.90;
    console.log('Pagamento no débito: 10% de desconto');
} else if (pgtoAtual === dinheiroPix) {
    precoFinal = precoProduto * 0.85;
    console.log('Pagamento no dinheiro ou PIX: 15% de desconto');
} else if (pgtoAtual === duasVezes) {
    precoFinal = precoProduto;
    console.log('Pagamento em 2x: Sem desconto ou juros');
} else if (pgtoAtual === acimaDeDuasVezes) {
    precoFinal = precoProduto * 1.10;
    console.log('Pagamento acima de 2x: 10% de juros');
} else {
    console.log('Forma de pagamento inválida');
}

if (precoFinal !== undefined) {
    console.log(`Valor final: R$ ${precoFinal.toFixed(2)}`);
}

/* O retorno no terminal será:
Pagamento no débito: 10% de desconto
Valor final: R$ 69.30
*/