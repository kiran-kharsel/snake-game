// dom elements
const gameBoard = document.querySelector('.game-board')


// game variable
const gridSize = 20;
let snake = [{x: 10, y: 10}]
let food = generateFoodPosition()

// graw game map, snake, food
function draw(){
    // reset board element
    gameBoard.innerHTML = '';

    // draw game element
    drawSnake()
    drawFood()
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


// draw food
function drawFood(){
    const foodElement = createGameElement('div', 'food')
    setPosition(foodElement, food)
    gameBoard.appendChild(foodElement)
}


// generate food position
function generateFoodPosition(){
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x,y}
}