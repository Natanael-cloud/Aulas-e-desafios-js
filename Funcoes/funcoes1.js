
function writemyName(name){
    return ('Meu nome é ' + name);
}


//função para verificar idade
function checkAge(Idade){
    if(Idade >= 18){
        console.log(writemyName('Natanael ') + 'sou Maior');
    }else{
        console.log('sou Menor');
    }
}

checkAge(31);

/**
retorna no terminal:
> Meu nome é Natanael sou Maior
 */