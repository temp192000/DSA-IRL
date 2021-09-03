// function declaration
// function Hoisting is possible and applicable.

isVoter("Ranjith Jr.", 14);

function isVoter(name, age){
    if(age >= 18){
        console.log(`Yes, ${name} is eligible to vote.`);
    }else{
        console.log(`No, ${name} isnt eligible to vote.`);
    }
}

// isVoter("Ranjith Jr.", 14);