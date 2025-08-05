
const notas = [];

notas.push(6);
notas.push(5);
notas.push(4);
notas.push(9);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(soma);

/* o retorno no terminal é: > 31

[Done] exited with code=0 in 0.326 seconds */