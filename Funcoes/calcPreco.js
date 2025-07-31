// Função que calcula o valor final do produto com base na forma de pagamento
function calcularValorFinal(precoEtiqueta, condicaoPagamento) {
    let valorFinal; // Variável que vai armazenar o valor final com desconto ou acréscimo
    let mensagem = ""; // Mensagem explicando o tipo de pagamento e o desconto/juros aplicado

    // Verifica qual é a condição de pagamento escolhida
    if (condicaoPagamento === 1) {
        // Débito: 10% de desconto
        valorFinal = precoEtiqueta * 0.90;
        mensagem = "Pagamento no Débito: 10% de desconto.";
    } else if (condicaoPagamento === 2) {
        // Dinheiro ou PIX: 15% de desconto
        valorFinal = precoEtiqueta * 0.85;
        mensagem = "Pagamento em Dinheiro ou PIX: 15% de desconto.";
    } else if (condicaoPagamento === 3) {
        // Parcelado em 2x: Sem desconto nem acréscimo
        valorFinal = precoEtiqueta;
        mensagem = "Pagamento em 2x: Sem desconto ou juros.";
    } else if (condicaoPagamento === 4) {
        // Parcelado acima de 2x: 10% de juros
        valorFinal = precoEtiqueta * 1.10;
        mensagem = "Pagamento acima de 2x: 10% de juros.";
    } else {
        // Se o código da condição de pagamento for inválido, exibe uma mensagem de erro
        console.log("Código de pagamento inválido.");
        return; // Encerra a execução da função
    }

    // Exibe a mensagem sobre a condição de pagamento escolhida
    console.log(mensagem);
    // Exibe o valor final formatado com duas casas decimais
    console.log(`Valor final a ser pago: R$ ${valorFinal.toFixed(2)}`);
}

// Exemplo de uso da função:
// Define o preço original do produto
const precoEtiqueta = 100;

// Define a forma de pagamento (1 = Débito, 2 = Dinheiro/PIX, 3 = 2x, 4 = mais de 2x)
const condicaoPagamento = 2;

// Chama a função passando os dois valores definidos acima
calcularValorFinal(precoEtiqueta, condicaoPagamento);


/*
Como a condição de pagamento atribuída foi a de numero 2, aparecerá a seguinte mensagem no terminal

Pagamento em Dinheiro ou PIX: 15% de desconto.
Valor final a ser pago: R$ 85.00

 */