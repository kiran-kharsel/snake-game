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
        let snakeElement = createGameElement('div', 'snake')
        
        // set position
        setPosition(snakeElement, segment)

        //append to board
        gameBoard.appendChild(snakeElement)
    })
}

// create game element like anke or food
function createGameElement(element, className){
    let gameElement = document.createElement(element)
    gameElement.classList.add(className)
    return gameElement
}

// set position for sanke or food
function setPosition(element, position){
    element.style.gridColumn = position.x
    element.style.gridRow = position.y
}