/* Author: Selina Daley */
/* File: invincible.ts */
/* Last Modified Date: April 18, 2016 */
/* Description: This script is used to make the player gain an ally */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // INVINCIBLE CLASS ++++++++++++++++++++++++++++++++++++
    var Invincible = (function (_super) {
        __extends(Invincible, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Invincible() {
            _super.call(this, "invincible");
            // PRIVATE INSTANCE VARIABLES +++++++++++++++++
            this._firstSet = true;
            this._speed.x -= 8; //item speed
            this._reset(this._rightBounds);
            this.name = "invincible";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Invincible.prototype._checkBounds = function (value) {
            // check to see if the right of the item is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the item offscreen
        Invincible.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + 4000;
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value + 8000;
                this.y = Math.floor(Math.random() * 365);
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Invincible.prototype.update = function () {
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Invincible;
    })(objects.SpriteGameObject2);
    objects.Invincible = Invincible;
})(objects || (objects = {}));
