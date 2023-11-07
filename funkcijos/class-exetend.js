class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.soud = 'Miau Au Cypt Cham';
    }

    setColor(newColor) {
        this.color = newColor;
    }
    sayHi() {
        return `${this.name}: ${this.soud}, as esu ${this.color} spalvos!`;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.soud = 'Au au'
    }

    repeatTwicw() {

    }
}
class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.soud = 'Miau miau'
    }
}

const rex = new Dog('Rex', 'juodos');
const brisius = new Dog('Brisius', 'baltos');
console.log(rex.sayHi());

 const  tom = new Cat('Tom', 'juodos');
 console.log(tom.sayHi());

 const  garfildas = new Cat('Garfildas', 'oranzdines');
 console.log(garfildas.sayHi());


 const Animal {}
//  const Pet extends Animal {}