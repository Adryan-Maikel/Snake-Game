import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = { y: 8, x: 2 };
const expancionRate = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(expancionRate);
        food = getRandomFoodPosition();
        foodEat.value ++;
        console.log(foodEat)
    }
}
export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null||onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}