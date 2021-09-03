function init(){
    // console.log("Reached init");

    canvas = document.getElementById('canvas-placeholder');
    pen = canvas.getContext('2d');
    
    W = canvas.width = 500;
    H = canvas.height = 500;
        
    rect = {
        x: 20,
        y: 20,
        w: 40,
        h: 40,
        speed:10
    }

    gameOver = false;
}

function draw(){
    // console.log("Reached draw");

    pen.clearRect(0, 0, W, H);
    pen.fillStyle = "red";
    pen.fillRect(rect.x, rect.y, rect.w, rect.h);    
}

function update(){
    // console.log("Reached update");
    rect.x += rect.speed;
    if(rect.x > W - rect.w || rect.x < 0){
        rect.speed *= -1;
    }
}

function gameLoop(){
    // console.log("Reached Game Loop");
    if(gameOver == true){
        clearInterval(gameState);
    }


    draw();
    update();

}


init();
var gameState = setInterval(gameLoop, 100);
