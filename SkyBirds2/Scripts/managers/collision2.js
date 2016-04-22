/* Author: Selina Daley */
/* File: collision2.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to detect when the ally collides with an object */
var managers;
(function (managers) {
    // COLLISION2 MANAGER CLASS
    var Collision2 = (function () {
        function Collision2(chicken) {
            this._chicken = chicken;
        }
        Collision2.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision2.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var allyHalfHeight = this._chicken.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = allyHalfHeight + objectHalfHeight;
            startPoint.x = this._chicken.x;
            startPoint.y = this._chicken.y + 30;
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
                        object._reset(config.Screen.WIDTH + 200);
                        this._explosionSound = createjs.Sound.play("explosionSound").setPan(0.0001).setVolume(0.5);
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        };
        Collision2.prototype.check2 = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var allyHalfHeight = this._chicken.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = allyHalfHeight + objectHalfHeight;
            startPoint.x = this._chicken.x;
            startPoint.y = this._chicken.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            // check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's an enemy hit
                    if (object.name === 'eShot') {
                        this._explosionSound = createjs.Sound.play("explosionSound").setPan(0.0001).setVolume(0.5);
                        object._reset(config.Screen.WIDTH + 200); // reset game object off screen
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        };
        return Collision2;
    })();
    managers.Collision2 = Collision2;
})(managers || (managers = {}));
