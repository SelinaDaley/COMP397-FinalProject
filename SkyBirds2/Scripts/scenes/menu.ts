// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _exitButton: objects.Button;
        private _background: createjs.Bitmap;
        private _logo: createjs.Bitmap;
        
        //PUBLIC INSTANCE VARIABLES
        public introMusic: createjs.AbstractSoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
                   
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("bkgd"));//"../../Assets/images/bkgd.png");
            this.addChild(this._background);

            // add the logo image
            this._logo = new createjs.Bitmap(assets.getResult("logo"));//"../../Assets/images/logo2.png");
            this._logo.x = config.Screen.CENTER_X * 0.35;
            this._logo.y = 0;//config.Screen.CENTER_Y * 0.005;
            this.addChild(this._logo);

            // assign and play the background sound
            this.introMusic = createjs.Sound.play("introMusic").setPan(0.0001).setVolume(0.2);
            // Loop engine sound forever
            this.introMusic.loop = -1;

            //Add Menu Label
            this._menuLabel = new objects.Label(
                "SKY BIRDS 2", "60px Monotype Corsiva",
                "#000000",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y - 40, true);
            this.addChild(this._menuLabel);            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X * 0.71,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            
            // add the Instruction button to the INSTRUCTION scene
            this._instructionButton = new objects.Button(
                "InstructionButton",
                config.Screen.CENTER_X * 0.95,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._instructionButton);

            // add the Exit button to the EXIT scene
            this._exitButton = new objects.Button(
                "ExitButton",
                config.Screen.CENTER_X * 0.83,
                config.Screen.CENTER_Y + 120, true);
            this.addChild(this._exitButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // Instruction Button event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);

            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Start Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL1 Scene
            this.introMusic.stop();
            scene = config.Scene.LEVEL1;
            changeScene();
        }

        // Instruction Button click event handler
        private _instructionButtonClick(event: createjs.MouseEvent) {
            // Switch to the Instruction Scene
this.introMusic.stop();
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }

        // Exit Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the Exit Scene
            //this.introMusic.stop();
            //scene = config.Scene.LEVEL1;
            //changeScene();
        }

    }
}