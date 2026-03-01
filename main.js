// dom elements
const snake = document.querySelector('.snake')
console.log(snake)

//variable
let x = 0;
let y = 0;


// function to move snake
document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowUp':
            console.log('up arrow');
            y -= 10;
            break;
        case 'ArrowDown':
            console.log('down arrow');
            y += 10;
            break;
        case 'ArrowLeft':
            console.log('left arrow');
            x -= 10;
            break;
        case 'ArrowRight':
            console.log('right arrow');
            x += 10;
            break;
    }
    snake.style.transform = `translate(${x}px, ${y}px)`;
})