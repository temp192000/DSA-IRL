// class declaration

class Cat{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    purr(){
        console.log(`${this.name} purrs`);
    }

    hiss = function(){
        console.log(`${this.name} hisses`);
    }
}

let Ginger = new Cat("Ginger", "Siberian");
console.log(Ginger.name);
console.log(Ginger.purr());