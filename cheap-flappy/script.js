function imageLoader(){
    enemyV1 = new Image();
    enemyV1.src = "./assets/v1.png"

    playerIMG = new Image();
    playerIMG.src = "./assets/superhero.png";

    gemIMG = new Image();
    gemIMG.src = "./assets/gem.png";
}

function init(){
    canvas = document.getElementById("canvas-area");
    W = canvas.width = 700; 
    H = canvas.height = 400;

    pen = canvas.getContext("2d");
    gameOver = false;

    e1 = {
        x: 150,
        y: 50,
        w: 60,
        h: 60,
        speed: 20
    };

    e2 = {
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed: 30
    };

    e3 = {
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed: 40
    };

    enemy = [e1, e2, e3];
    
    player = {
        x: 20,
        y: H/2,
        w: 60,
        h: 60,
        speed: 20,
        health: 100,
        isMoving: false
    };

    gem = {
        x: W - 100,
        y: H/2,
        w: 60,
        h: 60
    };

    canvas.addEventListener("mousedown",() => {
        player.isMoving = true;
    });

    canvas.addEventListener("mouseup", () => {
        player.isMoving = false;
    });
}

function isColliding(rect1, rect2){
    if(rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x && rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y){
        return true;
    }
    return false;
}

function draw(){
    pen.clearRect(0, 0, W, H);

    pen.drawImage(playerIMG, player.x, player.y, player.w, player.h);
    pen.drawImage(gemIMG, gem.x, gem.y, gem.w, gem.h);

    for(let i = 0; i < enemy.length; i++){
        pen.drawImage(enemyV1, enemy[i].x, enemy[i].y, enemy[i].w, enemy[i].h);
    }
}

function update(){
    if(isColliding(player, gem)){
        alert("🎉 Yay!, You Won 🎉");
        init();
        return;
    }
    
    for(let i = 0; i < enemy.length; i++){
        if(isColliding(enemy[i], player)){
            player.health -= 20;
            if(player.health < 0){
                gameOver = true;
                alert("Game Over 😩");
            }
        }
    }

    pen.fillStyle = "white";
    pen.fillText("Score: " + player.health, 20, 20);


    if(player.isMoving == true){
        player.x += player.speed;
    }

    for(let i = 0; i < enemy.length; i++){
        enemy[i].y += enemy[i].speed;

        if(enemy[i].y >= H - enemy[i].h || enemy[i].y < 0){
            enemy[i].speed *= -1;
        }
    }
}

function gameLoop(){
    if(gameOver == true){
        init();
    }
    draw();
    update();
}

imageLoader();
init();
gameState = setInterval(gameLoop, 100);