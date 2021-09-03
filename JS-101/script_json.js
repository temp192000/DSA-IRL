var cat = {
    x: 100,
    y: 200,
    breed: "Siberian",
    family:["Mama", "Daddy", "Boy Friend", "Baby"],
    purr: function(){
        console.log("purrs");
    },
    hiss(){
        console.log("hisses");
    }
}

// In JS, We can create an object without even a class. Cool, right? Also, Weird 🙃

console.log("cat   :", cat);
console.log("JSON.stringify(cat)   :", JSON.stringify(cat));
console.log("==============================================");

cat.family.forEach((value, index) => {
    console.log(index + ":", value);
})
console.log("==============================================");

console.log("cat.hiss() :"); cat.hiss();
console.log("cat.purr() :"); cat.purr()
console.log("==============================================");

console.log("cat.x  :", cat.x);
console.log("cat.y  :", cat.y);
console.log("==============================================");
console.log("cat.breed  :", cat.breed);