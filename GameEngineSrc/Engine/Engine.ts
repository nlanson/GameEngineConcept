//RUN TIME

import { Entity } from '../Entity/Entity';
import { GameObject } from '../GameObject/GameObject';

export class GameEngine{

    public gameObjects: Array<any>;
    
    constructor(Objects: Array<any>) {
        this.gameObjects = Objects;

        //Remove non GameObjects from the gameObjects Array.
        for ( let i=0; i<this.gameObjects.length; i++ ) {
            if (!(this.gameObjects[i] instanceof GameObject) ) {
                console.log(`GameObject@Param#${i} was invalid. It will not be accesible.`)
                delete this.gameObjects[i]
            }
        }
    }

}