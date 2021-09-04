function init(){
    garden = document.getElementById('canvas-area');
    W = H= garden.width = garden.height = 600;
    pen = garden.getContext('2d');
    
    cellSpace = 65;
    
    snake = {
        body:[],
        body_len: 5,
        color: "blue",
        direction: "right",
        
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
            snake.body.unshift({
                x:tailX + 1,
                y:tailY
            })
        }
    }

    snake.createSnake();
}

function draw(){
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
}

function gameLoop(){
    draw();
    update();
}

init();
gameState = setInterval(gameLoop, 100);