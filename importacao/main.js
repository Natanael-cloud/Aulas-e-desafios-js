const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets(); 
    numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const element = numerosSorteados[i]; 
    if (element > maiorValor) { 
        maiorValor = element;
    }
}

print(maiorValor);

/*
retorno do terminal do node
>98

[Done] exited with code=0 in 0.166 seconds


*/