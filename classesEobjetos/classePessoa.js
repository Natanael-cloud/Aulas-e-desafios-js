// Este código define uma classe Pessoa que armazena nome, peso e altura.
// Inclui métodos para calcular o IMC (Índice de Massa Corporal) e classificá-lo
// com base nas faixas da Organização Mundial da Saúde.
// Ao final, cria-se um objeto com os dados de uma pessoa chamada José e exibe
// no console a classificação do seu IMC.


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave')
        }

    }
}

const jose = new Pessoa('Jose', 77, 1.80);
console.log(jose.classificarImc());

// retorno do terminal: Peso Normal 