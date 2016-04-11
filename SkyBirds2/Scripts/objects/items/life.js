var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ALIEN CLASS ++++++++++++++++++++++++++++++++++++
    var Life = (function (_super) {
        __extends(Life, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Life() {
            _super.call(this, "life");
            // PRIVATE INSTANCE VARIABLES +++++++++++++++++
            this._firstSet = true;
            this._speed.x -= 4; //enemy speed
            this._reset(this._rightBounds);
            this.name = "life";
            //this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Life.prototype._checkBounds = function (value) {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Life.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + 2000;
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value + 2000;
                this.y = Math.floor(Math.random() * 365);
                scoreValue += 5;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Life.prototype.update = function () {
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Life;
    })(objects.SpriteGameObject);
    objects.Life = Life;
})(objects || (objects = {}));
