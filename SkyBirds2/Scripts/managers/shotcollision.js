var managers;
(function (managers) {
    // SHOTCOLLISION MANAGER CLASS
    var ShotCollision = (function () {
        function ShotCollision(shot) {
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
        };
        return ShotCollision;
    })();
    managers.ShotCollision = ShotCollision;
})(managers || (managers = {}));
