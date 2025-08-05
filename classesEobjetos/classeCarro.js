// Este código define uma classe Car que representa um carro com marca, cor e custo médio por km.
// Através dos métodos descrever() e calcularGastoPercurso(), é possível exibir informações do carro
// e calcular o custo de uma viagem com base na distância percorrida e no preço do combustível.
// O resultado do cálculo é formatado em reais (R$) para melhor visualização.


class Car {
    marca;
    cor;
    custoMedioKm;

    constructor(marca, cor, custoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.custoMedioKm = custoMedioKm;
    }

    descrever() {
        return `Carro: ${this.marca}, Cor: ${this.cor}, Custo Médio por KM: ${this.custoMedioKm.toFixed(2)}`;
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        const gasto = distancia * this.custoMedioKm * precoCombustivel;
        return gasto.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}

// Criando os objetos
const palio = new Car('Fiat', 'Vermelho', 1/12);
const gol = new Car('Volkswagen', 'Prata', 1/11);

// Usando os métodos
console.log(palio.descrever());
console.log(gol.descrever());

console.log(palio.calcularGastoPercurso(73, 5));



/*
Depois de dar Run no code aparece a seguinte informação no terminal
> Carro: Fiat, Cor: Vermelho, Custo Médio por KM: 0.08
Carro: Volkswagen, Cor: Prata, Custo Médio por KM: 0.09
R$ 30,42
*/

