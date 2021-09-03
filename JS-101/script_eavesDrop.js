canvas = document.getElementById('canvas-placeholder');


function keyListener(e){
    console.log(`Don't press the ${e.key} key`);
}

function clickListener(e){
    console.log(`Don't use ${e.pointerType}`);
}

document.addEventListener('keydown', keyListener);
canvas.addEventListener('click', clickListener);