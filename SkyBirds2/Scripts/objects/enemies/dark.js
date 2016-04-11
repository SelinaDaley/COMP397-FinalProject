var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // DARK CLASS ++++++++++++++++++++++++++++++++++++
    var Dark = (function (_super) {
        __extends(Dark, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Dark(num, darkCount) {
            _super.call(this, "dark");
            this._firstSet = true;
            this._num = num;
            this._darkCount = darkCount;
            this._sinNum = 0;
            this._speed.x -= 7; //enemy speed
            this._reset(this._rightBounds);
            this.name = "dark";
            //this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Dark.prototype._checkBounds = function (value) {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Dark.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + (this._num * (1100 / this._darkCount)); //550);
                this.y = Math.floor(Math.random() * 175);
                this._firstSet = false;
                this._sinNum = 0;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 175);
                scoreValue += 15;
                this._sinNum = 0;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Dark.prototype.update = function () {
            this._sinNum += 0.05;
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this.y = this.y + (Math.sin(this._sinNum) * 4);
            this._checkBounds(this._leftBounds);
        };
        return Dark;
    })(objects.SpriteGameObject);
    objects.Dark = Dark;
})(objects || (objects = {}));
