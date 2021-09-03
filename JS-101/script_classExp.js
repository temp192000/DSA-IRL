// class expression

let Cat = class{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    purr(){
        console.log(`${this.name} purrs`);
    }

    hiss(){
        console.log(`${this.name} hisses and wags tail`);
    }
}


let Ginger = new Cat("Ginger", "Siberian");

console.log(Ginger.name);
console.log(Ginger.hiss());