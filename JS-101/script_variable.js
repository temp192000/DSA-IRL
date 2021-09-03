// let x = 10;
// console.log(x);

// let y = [10, 20, 30, 40, 50];
// console.log(y);


// Global vs Var vs let

a = 10; // Global Scope
var b = 20; // Function Scope
let c = 30; // Block Scope

function scopeOfVariables(){
    console.log("============ Outside Function ============");
    console.log("Scope of Global:   ", a);
    console.log("Scope of var   :   ", b);
    console.log("Scope of let   :   ", c);

    if(true){
        console.log("============ Inside a Block of Function ============");
        console.log("Scope of Global:   ", a);
        console.log("Scope of var   :   ", b);
        console.log("Scope of let   :   ", c);    
    }
}

scopeOfVariables();

console.log("============ Outside Function ============");
console.log("Scope of Global:   ", a);
console.log("Scope of var   :   ", b);
console.log("Scope of let   :   ", c);

