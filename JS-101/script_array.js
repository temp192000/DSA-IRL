let arr = ["Apple", "Banana", "Cucumber", "Dragon Fruit"];

console.log("arr            :", arr);           // prints the elements in an array
console.log("arr.length     :", arr.length);    // prints the length of an array. length is a property
console.log('arr["length"]) :', arr["length"]); // prints the length of an array



console.log("============ For Loop ============");
for(let i = 0; i < arr.length; i++){
    console.log(`arr[${i}]   :`, arr[i]);
}


console.log("============ Push Pop ============");
console.log('arr.push("Eggplant") :', arr.push("Eggplant"));
console.log("After Push           :", arr);

console.log("arr.pop()    :", arr.pop());
console.log("After Pop    :", arr);

console.log("============ Shit Unshift ============");
console.log('arr.shift()            :', arr.shift());
console.log("After shift    :", arr);

console.log('arr.unshift("Apple")   :', arr.unshift("Apple"));
console.log("After unshift  :", arr);


console.log("============ indexOf ============");
console.log('arr.indexOf("Apple")   :', arr.indexOf("Apple")); // returns index of the element found
console.log('arr.indexOf("Mango")   :', arr.indexOf("Mango")); // returns -1 if element isn't found

