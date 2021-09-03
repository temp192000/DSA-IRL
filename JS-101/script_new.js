function Fruit(color, taste){
    this.color = color;
    this.taste = taste;
}

let Apple = new Fruit("Red", "Sweet");
let Orange = new Fruit("Orange", "Sour");
let Mango = new Fruit("Yellow", "Sweet and Sour");

console.log("Fruit   Color      Taste:"); 
console.log("Apple  ", Apple.color + "       ", Apple.taste);
console.log("Orange ", Orange.color+ "    ", Orange.taste);
console.log("Mango  ", Mango.color + "    ", Mango.taste);