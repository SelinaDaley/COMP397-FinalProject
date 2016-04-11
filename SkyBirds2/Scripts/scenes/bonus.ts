// BONUS SCENE
module scenes {
    export class Bonus extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.Background;
        private _aliens: objects.Alien[];
        private _alienCount: number;
        private _darks: objects.Dark[];
        private _darkCount: number;
        private _bomb: objects.Bomb;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _playtime: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PRIVATE METHODS
        
        /**
         * @method _updateScore
         * @return void
         */
        private _updateScore(): void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Enemy Count
            this._alienCount = 5;
            this._darkCount = 2;
            livesValue = 5;
            scoreValue = 0;
            
            // Instantiate arrays
            this._aliens = new Array<objects.Alien>();
            this._darks = new Array<objects.Dark>();

            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            // added bomb to the scene
            this._bomb = new objects.Bomb();
            this.addChild(this._bomb);

            // added aliens to the scene
            for (var alien: number = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }

            // added darks to the scene
            for (var dark: number = 0; dark < this._darkCount; dark++) {
                this._darks[dark] = new objects.Dark(dark, this._darkCount);
                this.addChild(this._darks[dark]);
            }

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
                        
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label(
                "Lives: " + livesValue,
                "40px Consolas",
                "#000000",
                10, 460, false
            );
            this.addChild(this._livesLabel);
            
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#000000",
                290, 460, false
            );
            this.addChild(this._scoreLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        

        // PLAY Scene updates here
        public update(): void {

            this._bomb.update();
            this._collision.check(this._bomb);

            this._background.update();
            this._player.update();

            this._aliens.forEach(alien => {
                alien.update();
                this._collision.check(alien);
            });

            this._darks.forEach(dark => {
                dark.update();
                this._collision.check(dark);
            });

            this._updateScore();
        }        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }

}