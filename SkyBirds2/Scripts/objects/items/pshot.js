/* Author: Selina Daley */
/* File: pshot.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to create a player bullet */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PSHOT CLASS ++++++++++++++++++++++++++++++++++++
    var Pshot = (function (_super) {
        __extends(Pshot, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Pshot(player) {
            _super.call(this, "pShot");
            this._firstSet = true;
            this.player = player;
            this._speed.x = 10; //bullet speed
            this._reset(this._leftBounds);
            this.name = "pShot";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Pshot.prototype._checkBounds = function (value) {
            // check to see if the right of the item is outside the viewport         
            if (this.x >= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Pshot.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = this.player.x + 1020;
                this.y = this.player.y;
                this._firstSet = false;
            }
            else {
                this.x = this.player.x + 50;
                this.y = this.player.y;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Pshot.prototype.update = function () {
            // scroll the shot 10 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Pshot;
    })(objects.SpriteGameObject2);
    objects.Pshot = Pshot;
})(objects || (objects = {}));
