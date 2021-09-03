// function scopeOfGlobal(){
//     if(true){
//         a = 10;
//         console.log("============= Inside if Block =============");
//         console.log("Scope of Global:   ", a);
//     }
//         console.log("============= Inside Function(){if(){}} =============");
//         console.log("Scope of Global:   ", a);
// }

// scopeOfGlobal();

// console.log("============= Outside Function(){if(){}} =============");
// console.log("Scope of Global:   ", a);


// function scopeOfVar(){
//     // var b = 20;
//     if(true){
//         // var b = 20;        
//         console.log("============= Inside if Block =============");
//         console.log(b);
//     }
//         console.log("============= Inside Function(){if(){}} =============");
//         console.log(b);
// }

// scopeOfVar();

// console.log("============= Outside Function(){if(){}} =============");
// console.log(b);

function scopeOfLet(){
    // let c = 30;
    if(true){
        let c = 30; 
        console.log("============= Inside if Block =============");
        console.log(c);
    }
        console.log("============= Inside Function(){if(){}} =============");
        console.log(c);
}

scopeOfLet();

console.log("============= Outside Function(){if(){}} =============");
console.log(c);
