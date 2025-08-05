
// Abaixo é criado uma Classe
class Person{
    name;
    age;

    describe(){
       console.log(`Meu nome é ${this.name} e minha idade é ${this.age} anos`); 
    }
}

//Abaixo é criado instancias dessa classe

const natanael = new Person();
natanael.name = 'Natanael P Costa';
natanael.age = 30;

const roberto = new Person();
roberto.name = 'Roberto Peçanha';
roberto.age = 27;

natanael.describe();
roberto.describe();


/* 
No terminal ao dar Run no code:
> Meu nome é Natanael P Costa e minha idade é 30 anos
Meu nome é Roberto Peçanha e minha idade é 27 anos
*/