class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    describe(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age} anos.`);
    }
}

const natanael = new Person('Natanael', 30);
const oswaldo = new Person('Oswaldo', 28);

natanael.describe();
oswaldo.describe();

/*
Ao dar Run no code aparecerá:
> Meu nome é Natanael e minha idade é 30 anos.
Meu nome é Oswaldo e minha idade é 28 anos.
*/