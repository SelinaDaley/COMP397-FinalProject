/* Author: Selina Daley */
/* File: eye.ts */
/* Last Modified Date: April 13, 2016 */
/* Description: This script is used to create an Eye boss enemy */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EYE CLASS ++++++++++++++++++++++++++++++++++++
    var Eye = (function (_super) {
        __extends(Eye, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Eye() {
            _super.call(this, "eye");
            this._firstSet = true;
            this._sinNum = 0;
            this.name = "eye";
            this.x = 700;
            this.enemyValue = 300;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Eye.prototype._checkBounds = function (value) {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Eye.prototype._reset = function (value) {
            /*if (this._firstSet) {
                this.x = value + (this._num * (1100 / this._darkCount));//550);
                this.y = Math.floor(Math.random() * 175);
                this._firstSet = false;
                this._sinNum = 0;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 175);
                //scoreValue += 15;
                this._sinNum = 0;
            }*/
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Eye.prototype.update = function () {
            this._sinNum += 0.05;
            // update boss movement
            //this.x += this._speed.x;
            this.y = this.y + (Math.sin(this._sinNum) * 5);
            this._checkBounds(this._leftBounds);
        };
        return Eye;
    })(objects.SpriteGameObject2);
    objects.Eye = Eye;
})(objects || (objects = {}));
