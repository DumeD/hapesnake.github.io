import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let foodOrDrink = 0
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1


export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  
  foodElement.classList.add(foodOrDrink % 2 === 0 ? 'food' : 'drink')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  foodOrDrink = Math.floor(Math.random() * 2)
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}