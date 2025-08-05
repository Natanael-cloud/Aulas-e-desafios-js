/*
Percorre uma lista de numero e imprimi cada numero par encontrado
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero);
    }
}

/*
O retorno no terminal será
> 
0
2
4
6
8
10

[Done] exited with code=0 in 0.215 seconds
 */