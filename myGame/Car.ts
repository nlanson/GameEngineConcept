import { Vector2 } from '../GameEngineSrc/Typings/Interfaces'
import { Entity } from '../GameEngineSrc/Entity/Entity'; 

//Car is a custom game object. Made by Game Developers.
export class Car extends Entity {
    constructor(
        initialPos: Vector2,
        sprite: String,
        public colour: String,
        public name: String
    ) {
        super(initialPos, sprite);
    }

    beep() {
        console.log(`${this.name} went Beep`);
    }

    move(force: Vector2) {
        super.addForce(force);
    }
}