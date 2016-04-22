var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// EXIT SCENE
var scenes;
(function (scenes) {
    var Exit = (function (_super) {
        __extends(Exit, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Exit() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Exit.prototype.start = function () {
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("fullBackground"));
            this.addChild(this._background);
            //Add EXIT Label
            this._exitLabel = new objects.Label("Thank you for playing", "60px Monotype Corsiva", "#006400", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y, true);
            this.addChild(this._exitLabel);
            //Add TRADEMARK Label
            this._trademarkLabel = new objects.Label("© 2016 by SDMD Games", "10px Calibri", "#006400", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._trademarkLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Exit.prototype.update = function () {
        };
        return Exit;
    })(objects.Scene);
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
