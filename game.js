import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import {update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');

let lastRenderTime = 0;
let gameOver = false;

requestAnimationFrame(main);

function main(currentTime){
    if(gameOver){
        if(confirm('Você perdeu!')){
            //foodEat
            location = '/';
        }
        return
    }
    requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) return 

    lastRenderTime = currentTime;
    
    update();
    draw();
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}