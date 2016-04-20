/* Author: Selina Daley */
/* File: ashot.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to create an ally bullet */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PSHOT CLASS ++++++++++++++++++++++++++++++++++++
    var Ashot = (function (_super) {
        __extends(Ashot, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ashot(chicken) {
            _super.call(this, "pShot");
            this._firstSet = true;
            this.chicken = chicken;
            this._speed.x = 10; //bullet speed
            this._reset(this._leftBounds);
            this.name = "pShot";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Ashot.prototype._checkBounds = function (value) {
            // check to see if the right of the item is outside the viewport         
            if (this.x >= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Ashot.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = this.chicken.x + 1020;
                this.y = this.chicken.y;
                this._firstSet = false;
            }
            else {
                this.x = this.chicken.x + 50;
                this.y = this.chicken.y;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Ashot.prototype.update = function () {
            // scroll the shot 10 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Ashot;
    })(objects.SpriteGameObject2);
    objects.Ashot = Ashot;
})(objects || (objects = {}));
