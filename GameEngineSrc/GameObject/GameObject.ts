import { Vector2 } from '../Typings/Interfaces'
import { Physics } from './Physics';

export abstract class GameObject extends Physics {

    position: Vector2;
    
    constructor(initialPosition: Vector2){
        super();
        this.position = initialPosition;
    }

    addForce(force: Vector2) {
        this.position = super.calculateForce(this.position, force);
    }
}