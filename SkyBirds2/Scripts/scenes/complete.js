var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// COMPLETE SCENE
var scenes;
(function (scenes) {
    var Complete = (function (_super) {
        __extends(Complete, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Complete() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Complete.prototype.start = function () {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            // assign and play the background sound
            this._endMusic = createjs.Sound.play("endMusic");
            // Loop engine sound forever
            this._endMusic.loop = -1;
            //Add Menu Label
            this._endLabel = new objects.Label("GAME COMPLETE", "60px Consolas", "#ffff00", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);
            //Add Score Label
            this._scoreLabel = new objects.Label("Your Score: " + scoreValue, "40px Consolas", "#ffff00", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);
            //Add HighScore Label
            this._highScoreLabel = new objects.Label("High Score: " + highScoreValue, "40px Consolas", "#ffff00", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y, true);
            this.addChild(this._highScoreLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Complete.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Complete.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            this._endMusic.stop();
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return Complete;
    })(objects.Scene);
    scenes.Complete = Complete;
})(scenes || (scenes = {}));
