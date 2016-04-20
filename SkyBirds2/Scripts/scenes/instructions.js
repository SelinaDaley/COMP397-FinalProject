var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            this._text = "\n" +
                "Move Up: Move the mouse up\n" +
                "Move Down: Move the mouse down\n" +
                "Move Left: Move the mouse left\n" +
                "Move Right: Move the mouse right\n" +
                "Fire Shot: Automatic";
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("fullBackground"));
            this.addChild(this._background);
            // assign and play the background sound
            this.introMusic = createjs.Sound.play("introMusic").setPan(0.0001).setVolume(0.2);
            // Loop engine sound forever
            this.introMusic.loop = -1;
            //Add Instruction Label
            this._instructionsLabel = new objects.Label("INSTRUCTIONS", "60px Monotype Corsiva", "#000000", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 140, true);
            this.addChild(this._instructionsLabel);
            //Add Text Label
            this._textLabel = new objects.Label("" + this._text, "20px Calibri", "#000000", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 60, true);
            this.addChild(this._textLabel);
            // add the Back button to the INSTRUCTIONS scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            // Back Button event listener
            this._backButton.on("click", this._backClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Back Button click event handler
        Instructions.prototype._backClick = function (event) {
            // Switch to the Menu Scene
            this.introMusic.stop();
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
