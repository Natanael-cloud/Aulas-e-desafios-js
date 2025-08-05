
const pessoa = {
    nome: 'Natanael P Costa',
    idade: 30,
    descrever: function(){
        this
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }
};

pessoa.descrever();

/*
O retorno no terminal será:
> Meu nome é Natanael P Costa e minha idade é: 30
 */

