/* Author: Selina Daley */
/* File: background.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to scroll the background image */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BACKGROUND CLASS ++++++++++++++++++++++++++++++++++++
    var Background = (function (_super) {
        __extends(Background, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Background() {
            if (level == 1) {
                _super.call(this, "bkgd");
            }
            else if (level == 2) {
                _super.call(this, "bkgd2");
            }
            else if (level == 3) {
                _super.call(this, "bkgd3");
            }
            else if (level == 4) {
                _super.call(this, "bkgd4");
            }
            this._speed.x -= 8; //background speed
            this._reset(10);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Background.prototype._checkBounds = function (value) {
            // check to see if the right of the background 
            // is met the right of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the background offscreen
        Background.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Background.prototype.update = function () {
            // scroll the background 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-1024);
        };
        return Background;
    })(objects.GameObject);
    objects.Background = Background;
})(objects || (objects = {}));
