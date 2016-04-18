/* Author: Selina Daley */
/* File: shotcollision.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to detect when the player bullet collides with an enemy */
var managers;
(function (managers) {
    // SHOTCOLLISION MANAGER CLASS
    var ShotCollision = (function () {
        function ShotCollision(shot) {
            this._count = 0;
            this._shot = shot;
        }
        ShotCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        ShotCollision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._shot.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._shot.x;
            startPoint.y = this._shot.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's an enemy hit
                    if (object.name === "alien" || object.name === "bomb" || object.name === "dark" || object.name === "horn" || object.name === "rocket") {
                        scoreValue += object.enemyValue; // add points to thte score
                        object._reset(config.Screen.WIDTH + 200);
                        this._shot._reset(config.Screen.WIDTH + 200);
                        this._explosionSound = createjs.Sound.play("explosionSound");
                        // check if 
                        if (scoreValue >= nextLevelValue && level < 4) {
                            scene = config.Scene.NEXTLEVEL;
                            this._shot.player.gameMusic.stop();
                            changeScene();
                        }
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        };
        ShotCollision.prototype.check2 = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._shot.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._shot.x;
            startPoint.y = this._shot.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's an enemy hit
                    if (object.name === "eye") {
                        this._count++;
                        this._explosionSound = createjs.Sound.play("explosionSound");
                        this._shot._reset(config.Screen.WIDTH + 200);
                        console.log(this._count);
                        if (this._count >= 25) {
                            scoreValue += object.enemyValue; // add points to thte score
                            scene = config.Scene.NEXTLEVEL;
                            this._shot.player.gameMusic.stop();
                            changeScene();
                        }
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        };
        return ShotCollision;
    })();
    managers.ShotCollision = ShotCollision;
})(managers || (managers = {}));
