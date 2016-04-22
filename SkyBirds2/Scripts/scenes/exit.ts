// EXIT SCENE
module scenes {
    export class Exit extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _exitLabel: objects.Label;
        private _trademarkLabel: objects.Label;
        private _background: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++

        // Start Method
        public start(): void {
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("fullBackground"));
            this.addChild(this._background);
            
            //Add EXIT Label
            this._exitLabel = new objects.Label(
                "Thank you for playing", "60px Monotype Corsiva",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y, true);
            this.addChild(this._exitLabel);

            //Add TRADEMARK Label
            this._trademarkLabel = new objects.Label(
                "© 2016 by SDMD Games", "10px Calibri",
                "#006400",
                config.Screen.CENTER_X * 0.83, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._trademarkLabel);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
    }
}