var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // HORN CLASS ++++++++++++++++++++++++++++++++++++
    var Horn = (function (_super) {
        __extends(Horn, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Horn(num, enemyCount) {
            _super.call(this, "horn");
            this._firstSet = true;
            this._shotCount = 1;
            this._num = num;
            this._enemyCount = enemyCount;
            this._speed.x -= 7; //enemy speed
            this._reset(this._rightBounds);
            this.name = "horn";
            this.enemyValue = 15;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Horn.prototype._checkBounds = function (value) {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Horn.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + (this._num * (1100 / this._enemyCount)); //550);
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 365);
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Horn.prototype.update = function () {
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Horn;
    })(objects.SpriteGameObject);
    objects.Horn = Horn;
})(objects || (objects = {}));
