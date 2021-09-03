// function expression
// function hoisting isn't possible and obviously, not applicable.

// isVoter("Ranjith Sr.", 21);

let isVoter = function(name, age){
    if(age >= 18){
        console.log(`Yes, ${name} is eligible to vote.`);
    }else{
        console.log(`No, ${name} isn't eligible to vote.`);
    }
}

isVoter("Ranjith Sr.", 21);