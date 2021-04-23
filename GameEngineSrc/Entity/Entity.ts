import { GameObject } from '../GameObject/GameObject';
import { Vector2 } from '../Typings/Interfaces';

export abstract class Entity extends GameObject {

    sprite: String;
    
    constructor(
        initialPosition: Vector2,
        pathToSpriteImage: String
    ) {
        super(initialPosition);
        this.sprite = pathToSpriteImage;
    }

    renderer() {
        console.log('I render this entity every frame lol')
    }

}