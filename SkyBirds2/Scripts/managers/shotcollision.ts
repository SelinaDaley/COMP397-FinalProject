module managers {
    // SHOTCOLLISION MANAGER CLASS
    export class ShotCollision {
        // PRIVATE INSTANCE VARIABLES
        private _shot: objects.Pshot;
        private _explosionMusic: createjs.AbstractSoundInstance;

        constructor(shot: objects.Pshot) {
            this._shot = shot;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.SpriteGameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._shot.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._shot.x;
            startPoint.y = this._shot.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;

            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    
                    // check if it's an enemy hit
                    if (object.name === "alien" || object.name === "bomb" || object.name === "dark" || object.name === "horn") {
                        scoreValue += object.enemyValue; // add points to thte score
                        object._reset(config.Screen.WIDTH + 200);
                        this._shot._reset(config.Screen.WIDTH + 200);
                        this._explosionMusic = createjs.Sound.play("explosionMusic");                        
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        }        
    }
}