import { Vector2 } from "../Typings/Interfaces";

export abstract class Physics {
    
    //Theres probably a shit tonne more maths than this to add forces.
    calculateForce(position: Vector2, force: Vector2): Vector2 {
        position.x = position.x + force.x;
        position.y = position.y + force.y;

        return position;
    }
}