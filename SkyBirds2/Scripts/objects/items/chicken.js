/* Author: Selina Daley */
/* File: chicken.ts */
/* Last Modified Date: April 13, 2016 */
/* Description: This script is used to create a Chicken ally */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CHICKEN CLASS ++++++++++++++++++++++++++++++++++++
    var Chicken = (function (_super) {
        __extends(Chicken, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Chicken() {
            _super.call(this, "chicken");
            this._shotCount = 1;
            this._fighting = false;
            this._count = 0;
            this._time = 0;
            this.y = -100;
            this.name = "chicken";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Chicken.prototype._moveAlly = function () {
            this.y = -100;
        };
        // reset the ally
        Chicken.prototype._reset = function (value) {
            this._startTime = this._time;
            this.x = 100;
            this.y = Math.floor(Math.random() * 365);
            this._fighting = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Chicken.prototype.update = function () {
            this._count++;
            this._time = Math.floor(this._count / 60);
            if (this._startTime + 8 < this._time && this._fighting == true) {
                this._moveAlly();
                this._fighting = false;
                console.log("move ally");
            }
        };
        return Chicken;
    })(objects.SpriteGameObject2);
    objects.Chicken = Chicken;
})(objects || (objects = {}));
