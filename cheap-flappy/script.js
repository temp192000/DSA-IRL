function imageLoader(){}

function init(){
    canvas = document.getElementById("canvas-area");
    W = canvas.width = 700; 
    H = canvas.height = 400;

    pen = canvas.getContext("2d");

    box = {
        x: 150,
        y: 50,
        w: 60,
        h: 60
    }
}
function draw(){
    pen.fillRect(box.x, box.y, box.w, box.h);
}

function update(){}

function gameLoop(){
    draw();
    update();
}

init();
gameState = setInterval(gameLoop, 100);