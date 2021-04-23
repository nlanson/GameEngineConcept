//This game file is a game that uses my game engine from '../src/'

import { GameEngine } from '../GameEngineSrc/Engine/Engine'; //Import the game engine here.
import { Car } from './Car' //My  custom gameObject.

let toyota = new Car({x: 10, y:10}, 'toyota.jpg', 'red', 'Prius');
let nissan = new Car({x: 0, y:0}, 'nissan.jpg', 'blue', 'March');

let game = new GameEngine([ //Start the Game.
    toyota, nissan, "lol"
]);

game.gameObjects[0].beep();
game.gameObjects[0].move({x: -5, y: -5});
console.log(`${game.gameObjects[0].name} is now at x:${game.gameObjects[0].position.x}, y:${game.gameObjects[0].position.y}`)