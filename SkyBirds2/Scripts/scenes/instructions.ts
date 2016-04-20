// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsLabel: objects.Label;
        private _textLabel: objects.Label;
        private _backButton: objects.Button;
        private _background: createjs.Bitmap;
        private _text: String;
        
        //PUBLIC INSTANCE VARIABLES
        public introMusic: createjs.AbstractSoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._text = "\n"+ 
            "Move Up: Move the mouse up\n"+
            "Move Down: Move the mouse down\n"+
            "Move Left: Move the mouse left\n"+
            "Move Right: Move the mouse right\n"+
            "Fire Shot: Automatic";

            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("fullBackground"));
            this.addChild(this._background);
            
            // assign and play the background sound
            this.introMusic = createjs.Sound.play("introMusic").setPan(0.0001).setVolume(0.2);
            // Loop engine sound forever
            this.introMusic.loop = -1;

            //Add Instruction Label
            this._instructionsLabel = new objects.Label(
                "INSTRUCTIONS", "60px Monotype Corsiva",
                "#000000",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y - 140, true);
            this.addChild(this._instructionsLabel);            
            
            //Add Text Label
            this._textLabel = new objects.Label(
                "" + this._text, "20px Calibri",
                "#000000",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y - 60, true);
            this.addChild(this._textLabel);            

            // add the Back button to the INSTRUCTIONS scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);            
            
            // Back Button event listener
            this._backButton.on("click", this._backClick, this);          
                        
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Back Button click event handler
        private _backClick(event: createjs.MouseEvent) {
            // Switch to the Menu Scene
            this.introMusic.stop();
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}
