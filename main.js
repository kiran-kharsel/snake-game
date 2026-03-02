// dom elements
const gameBoard = document.querySelector('.game-board')


// game variable
let snake = [{x: 10, y: 10}]

// graw game map, snake, food
function draw(){
    // reset board element
    drawSnake()
}

draw()

// draw snake
function drawSnake(){
    snake.forEach((segment) => {
        let snakeElement = document.createElement('div')
        snakeElement.classList.add('snake')

        // set position
        snakeElement.style.gridColumn = segment.x
        snakeElement.style.gridRow = segment.y

        //append to board
        gameBoard.appendChild(snakeElement)
    })
}