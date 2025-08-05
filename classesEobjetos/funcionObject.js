// Função recebendo um Objeto

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

function peopleCompare(p1, p2){
    if(p1.age > p2.age){
        console.log(`${p1.name} é mais velho(a) que ${p2.name}`);
    }else if(p2.age > p1.age){
        console.log(`${p2.name} é mais velho(a) que ${p1.name}`);
    }else{
        console.log(`${p1.name} e ${p2.name} tem a mesma idade.`)
    }
}

const tulio = new Person('Tulio', 33);
const caue = new Person('Caue', 43);

peopleCompare(tulio, caue);
/*
Após o Run do code haverá a comparação e o resultado:
> Caue é mais velho(a) que Tulio
*/