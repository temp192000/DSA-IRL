function init(){
    garden = document.getElementById('canvas-area');
    W = H = garden.width = garden.height = 1000;
    pen = garden.getContext('2d');
    
    cellSpace = 67;
    
    apple = growApple();
    
    snake = {
        body:[],
        body_len: 5,
        color: "blue",
        direction: "right",
        health: 1,
        
        createSnake(){
            for(let i = snake.body_len; i > 0; i--){
                snake.body.push({x:i,y:0});
            }
        },

        drawSnake(){
            pen.fillStyle = snake.color;

            for(let i = 0; i < snake.body.length; i++){
                pen.fillRect(snake.body[i].x * cellSpace, snake.body[i].y * cellSpace, cellSpace - 4, cellSpace - 2);
            }
        },

        updateSnake(){
            headX = snake.body[0].x;
            headY = snake.body[0].y;

            if(headX == apple.x && headY == apple.y){
                apple = growApple();
            }else{
                this.body.pop();
            }
            
            let nextSceneX, nextSceneY;

            if(snake.direction == "right"){
                nextSceneX = headX + 1;
                nextSceneY = headY;
            }else if(snake.direction == "left"){
                nextSceneX = headX - 1;
                nextSceneY = headY;
            }else if(snake.direction == "up"){
                nextSceneX = headX;
                nextSceneY = headY - 1;
            }else{
                nextSceneX = headX;
                nextSceneY = headY + 1;
            }

            this.body.unshift({x:nextSceneX, y:nextSceneY});

            let lastSceneX = Math.round(W / cellSpace), lastSceneY = Math.round(H / cellSpace);
            if(snake.body[0].x < 0 || snake.body[0].y < 0 || snake.body[0].x > lastSceneX ||snake.body[0].y > lastSceneY){
                snake.health = 0;
            }
        }        
    }

    snake.createSnake();

    function helpSnake(e){
        if(e.key == "ArrowDown"){
            snake.direction = "down";
        }else if(e.key == "ArrowUp"){
            snake.direction = "up";
        }else if(e.key == "ArrowLeft"){
            snake.direction = "left";
        }else if(e.key == "ArrowRight"){
            snake.direction = "right";
        }
    }

    document.addEventListener("keydown", helpSnake);
}

function growApple(){
    let appleX = Math.round(Math.random() * (W - cellSpace) / cellSpace);
    let appleY = Math.round(Math.random() * (H - cellSpace) / cellSpace);

    let apple = {
        x: appleX,
        y: appleY
    }

    return apple;
}

function draw(){
    pen.clearRect(0, 0, W, H);
    pen.fillRect(apple.x * cellSpace, apple.y * cellSpace, cellSpace, cellSpace);
    
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
}

function gameLoop(){
    if(snake.health == 0){
        clearInterval(gameState);
        alert("Game Over");
    }
    draw();
    update();
}

init();
gameState = setInterval(gameLoop, 100);