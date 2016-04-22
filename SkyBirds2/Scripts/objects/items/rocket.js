/* Author: Selina Daley */
/* File: rocket.ts */
/* Last Modified Date: April 18, 2016 */
/* Description: This script is used to create an enemy rocket */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ROCKET CLASS ++++++++++++++++++++++++++++++++++++
    var Rocket = (function (_super) {
        __extends(Rocket, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Rocket(num, enemyCount, enemy) {
            _super.call(this, "rocket");
            this._firstSet = true;
            this._fireRate = Math.floor(Math.random() * 2);
            this._enemy = enemy;
            this._num = num;
            this._enemyCount = enemyCount;
            this._speed.x -= 10; //enemy speed
            this._reset(this._rightBounds);
            this.name = "rocket";
            this.enemyValue = 5;
            this._count = 0;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Rocket.prototype._checkBounds = function (value) {
            // check to see if the right of the item is outside the viewport         
            /*if (this.x <= value && this._time > this._fireRate) {
                this._fireRate = this._time + Math.floor(Math.random() * 2);
                this._reset(this._rightBounds);
            }*/
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Rocket.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 50 * this._num;
                this._firstSet = false;
            }
            else {
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 50 * this._num;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Rocket.prototype.update = function () {
            // scroll the shot -5 px per frame
            this.x += this._speed.x;
            this._count++;
            this._time = Math.floor(this._count / 60);
            this._checkBounds(this._leftBounds);
        };
        return Rocket;
    })(objects.SpriteGameObject);
    objects.Rocket = Rocket;
})(objects || (objects = {}));
