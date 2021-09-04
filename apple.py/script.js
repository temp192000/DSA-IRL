function init(){
    garden = document.getElementById('canvas-area');
    W = H = garden.width = garden.height = 600;
    pen = garden.getContext('2d');
    
    cellSpace = 65;
    
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
            for(let i = 0; i < snake.body_len; i++){
                pen.fillRect(snake.body[i].x * cellSpace, snake.body[i].y * cellSpace, cellSpace - 4, cellSpace - 2)
            }
        },

        updateSnake(){
            snake.body.pop();
            tailX = snake.body[0].x;
            tailY = snake.body[0].y;
            
            let nextSceneX, nextSceneY;

            if(snake.direction == "right"){
                nextSceneX = tailX + 1;
                nextSceneY = tailY;
            }else if(snake.direction == "left"){
                nextSceneX = tailX - 1;
                nextSceneY = tailY;
            }else if(snake.direction == "up"){
                nextSceneX = tailX;
                nextSceneY = tailY - 1;
            }else if(snake.direction == "down"){
                nextSceneX = tailX;
                nextSceneY = tailY + 1;
            }
            
            // Collision Detection

            snake.body.unshift({
                x:nextSceneX,
                y:nextSceneY
            })

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

function draw(){
    pen.clearRect(0, 0, W, H);
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