var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SPRITEGAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    var SpriteGameObject = (function (_super) {
        __extends(SpriteGameObject, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function SpriteGameObject(spriteString) {
            _super.call(this, textureAtlas, spriteString);
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.isColliding = false;
            this._topBounds = -this.height;
            this._bottomBounds = config.Screen.HEIGHT + this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        SpriteGameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if x value has met the reset criteria
            if (this.x >= value) {
                this._reset(resetValue);
            }
        };
        // Reset the Object offscreen
        SpriteGameObject.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        SpriteGameObject.prototype.update = function () {
            var boundValue = 0;
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(boundValue);
        };
        return SpriteGameObject;
    })(createjs.Sprite);
    objects.SpriteGameObject = SpriteGameObject;
})(objects || (objects = {}));
