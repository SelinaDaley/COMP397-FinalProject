// COMPLETE SCENE
module scenes {
    export class Complete extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label
        private _highScoreLabel: objects.Label;
        private _restartButton: objects.Button;
        private _menuButton: objects.Button;
        private _background: createjs.Bitmap;
        private _endMusic: createjs.AbstractSoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("gameComplete"));
            this.addChild(this._background);

            // assign and play the background sound
            this._endMusic = createjs.Sound.play("endMusic").setPan(0.0001);
            // Loop engine sound forever
            this._endMusic.loop = -1;

            //Add Menu Label
            this._endLabel = new objects.Label(
                "GAME COMPLETE", "48px Papyrus",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Consolas",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);

            //Add HighScore Label
            this._highScoreLabel = new objects.Label(
                "High Score: " + highScoreValue, "40px Consolas",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y, true);
            this.addChild(this._highScoreLabel);

            // add the RESTART button to the COMPLETE scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y + 130, true);
            this.addChild(this._restartButton);

            // RESTART Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add the MENU button to the COMPLETE scene
            this._menuButton = new objects.Button(
                "MenuButton",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._menuButton);

            // MENJU Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            this._endMusic.stop();
            scene = config.Scene.LEVEL1;
            changeScene();
        }

        // MENU Button click event handler
        private _menuButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            this._endMusic.stop();
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}