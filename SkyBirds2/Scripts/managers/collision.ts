/* Author: Selina Daley */
/* File: collision.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to detect when the player collides with an object */

module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        private _chicken: objects.Chicken;
        private _explosionSound: createjs.AbstractSoundInstance;
        private _itemSound: createjs.AbstractSoundInstance;

        constructor(player: objects.Player, chicken: objects.Chicken) {
            this._player = player;
            this._chicken = chicken;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.SpriteGameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's an player hit
                    //if (object.name === "pShot") {
                    //    scoreValue += object.enemyValue;//100; //award 100 points
                    //}

                    // check if it's an enemy hit
                    if (object.name === 'alien' || object.name === 'bomb' || object.name === "dark" || object.name === "horn" || object.name === "rocket") {
                        livesValue--; // lose a life
                        object._reset(config.Screen.WIDTH + 200);
                        this._explosionSound = createjs.Sound.play("explosionSound").setPan(0.0001).setVolume(0.5);

                        // check if player has no more lives
                        if(livesValue <= 0) {
                            // turn off player engine
                            this._player.gameMusic.stop();
                            // show the Game Over Screen
                            scene = config.Scene.END;
                            changeScene();
                        }                        
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            } 
        }

        public check2(object: objects.SpriteGameObject2) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's life hit
                    if (object.name === "life") {
                        livesValue++; // gain a life
                        this._itemSound = createjs.Sound.play("itemSound").setPan(0.0001).setVolume(0.5);
                        object._reset(config.Screen.WIDTH + 200); // reset game object off screen
                    }
                    if (object.name === "invincible") {
                        this._chicken._reset(0);
                        object._reset(config.Screen.WIDTH + 200);
                        this._itemSound = createjs.Sound.play("itemSound").setPan(0.0001).setVolume(0.5);
                    }

                    // check if it's an enemy hit
                    if (object.name === 'eShot') {
                        livesValue--; // lose a life
                        this._explosionSound = createjs.Sound.play("explosionSound").setPan(0.0001).setVolume(0.5);
                        object._reset(config.Screen.WIDTH + 200); // reset game object off screen

                        // check if player has no more lives
                        if (livesValue <= 0) {                            
                            this._player.gameMusic.stop(); // turn off main game music                            
                            scene = config.Scene.END; // show the Game Over Screen
                            changeScene();
                        }
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