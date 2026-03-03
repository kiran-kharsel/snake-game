// dom elements
const gameBoard = document.querySelector('.game-board')


// game variable
const gridSize = 20;
let snake = [{x: 10, y: 10}]
let food = generateFoodPosition()
let gameInterval;
let gameSpeedDelay = 1000;
let gameStarted = false;

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


// move the snake
function moveSnake(){
    // get snake head position
    const head = {...snake[0]};

    switch (direction) {
        case 'right':
            head.x++
            break;
        case 'left':
            head.x--
            break;
        case 'up':
            head.y--
            break;
        case 'down':
            head.y++
            break;
    }
    
    // add new head
    snake.unshift(head)


    // test for food colliion
    if(head.x === food.x && head.y === food.y){
        // create new food
        food = generateFoodPosition()
        // clearInterval()
        gameInterval = setInterval(()=> {
            moveSnake()
            draw()
        }, gameSpeedDelay)
    } else{
        // remove last head position
        snake.pop()
    }
}

// start game function
function startGame(){
    gameStarted = true;
    gameInterval = setInterval(() => {
        moveSnake()
        //checkCollision()
        draw()
    }, gameSpeedDelay)
}


// keypress event listener
function handleKeyPress(event){
    startGame()
    console.log(event)
    switch (event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
}

document.addEventListener('keydown', handleKeyPress)