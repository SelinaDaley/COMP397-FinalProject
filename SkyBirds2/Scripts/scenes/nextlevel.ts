// NEXTLEVEL SCENE
module scenes {
    export class NextLevel extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _titleLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _bonusLabel: objects.Label;
        private _nextButton: objects.Button;
        private _background: createjs.Bitmap;
        private _introMusic: createjs.AbstractSoundInstance;
        private _timeBonus: number;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            timeBonus += Math.floor(scoreValue / time) * 4;
                        
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("fullBackground"));
            this.addChild(this._background);
            
            // assign and play the background sound
            this._introMusic = createjs.Sound.play("introMusic").setPan(0.0001).setVolume(0.2);
            // Loop engine sound forever
            this._introMusic.loop = -1;

            //Add Title Label
            this._titleLabel = new objects.Label(
                "Level " + level + " Complete", "60px Monotype Corsiva",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 140, true);
            this.addChild(this._titleLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Consolas",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y - 40, true);
            this.addChild(this._scoreLabel);
            
            //Add Bonus Label
            this._bonusLabel = new objects.Label(
                "Time Bonus: " + Math.floor(scoreValue / time) * 4, "40px Consolas",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y + 40, true);
            this.addChild(this._bonusLabel);

            // add the NEXT button to the OVER scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y + 130, true);
            this.addChild(this._nextButton);

            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
                        
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the next Scene
            if (level == 1) {
                scene = config.Scene.LEVEL2; // show the Level 2 Screen
            }
            else if (level == 2) {
                scene = config.Scene.LEVEL3; // show the Level 3 Screen
            }
            else if (level == 3) {
                scene = config.Scene.BONUS; // show the Bonus Screen                                
            }
            else if (level == 4) {
                scene = config.Scene.COMPLETE; // show the Complete Screen
            }

            console.log(timeBonus);

            this._introMusic.stop();
            changeScene();
        }
    }
}