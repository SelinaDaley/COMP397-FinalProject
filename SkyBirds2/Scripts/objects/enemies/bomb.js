var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BOMB CLASS ++++++++++++++++++++++++++++++++++++
    var Bomb = (function (_super) {
        __extends(Bomb, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Bomb() {
            _super.call(this, "bomb");
            // PRIVATE INSTANCE VARIABLES +++++++++++++++++
            this._firstSet = true;
            this._speed.x -= 10; //enemy speed
            this._reset(this._rightBounds);
            this.name = "bomb";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Bomb.prototype._checkBounds = function (value) {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Bomb.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + 1000;
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value + 1000;
                this.y = Math.floor(Math.random() * 365);
                scoreValue += 10;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Bomb.prototype.update = function () {
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Bomb;
    })(objects.SpriteGameObject);
    objects.Bomb = Bomb;
})(objects || (objects = {}));
