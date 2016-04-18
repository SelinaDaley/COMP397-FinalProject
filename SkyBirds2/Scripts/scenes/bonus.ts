// BONUS SCENE
module scenes {
    export class Bonus extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _collision: managers.Collision;
        private _shotcollision: managers.ShotCollision[];

        //private _aliens: objects.Alien[];
        //private _alienCount: number;
        private _eye: objects.Eye;
        private _rockets: objects.Rocket[];

        private _life: objects.Life;
        private _player: objects.Player;
        private _shots: objects.Pshot[];
        private _shotCount: number;
        private _rocketCount: number;

        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _timeLabel: objects.Label;
        private _playtime: number;
        private _time: number = 0;
        
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
            this._timeLabel.text = "Time: " + Math.floor(this._time / 60);
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Enemy Count
            //this._alienCount = 5;
            this._shotCount = 1;
            this._rocketCount = 3;
            level = 4;
            //nextLevelValue = 500;            
            
            // Instantiate arrays
            //this._aliens = new Array<objects.Alien>();
            this._shots = new Array<objects.Pshot>();
            this._rockets = new Array<objects.Rocket>();
            this._shotcollision = new Array<managers.ShotCollision>();

            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("bkgd4"));
            this.addChild(this._background);
            
            // added eye boss to the scene
            this._eye = new objects.Eye();
            this.addChild(this._eye);

            // added darks to the scene
            for (var rocket: number = 0; rocket < this._rocketCount; rocket++) {
                this._rockets[rocket] = new objects.Rocket(rocket, this._rocketCount, this._eye);
                this.addChild(this._rockets[rocket]);
            }



            // added life to the scene
            this._life = new objects.Life();
            this.addChild(this._life);

            /*// added aliens to the scene
            for (var alien: number = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }*/
            
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // added player shots to the scene
            for (var shot: number = 0; shot < this._shotCount; shot++) {
                this._shots[shot] = new objects.Pshot(this._player);
                this.addChild(this._shots[shot]);

                // added shotcollision manager to the scene
                this._shotcollision[shot] = new managers.ShotCollision(this._shots[shot]);
            }   
                     
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

            //added TimeLabel to the scene
            this._timeLabel = new objects.Label(
                "Time: " + Math.floor(this._time / 60),
                "40px Consolas",
                "#000000",
                590, 460, false
            );
            this.addChild(this._timeLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
        
            this._eye.update();
            this._shotcollision.forEach(shot => {
                shot.check2(this._eye);
            });

            this._rockets.forEach(rocket => {
                rocket.update();   
                this._collision.check(rocket);
                
                this._shotcollision.forEach(shot => {
                    shot.check(rocket); 
                });           
            });

            
            this._life.update();
            this._collision.check2(this._life);
            
            this._player.update();

            /*this._aliens.forEach(alien => {
                alien.update();
                this._collision.check(alien);

                this._shotcollision.forEach(shot => {
                    shot.check(alien);
                });
            });*/

            this._shots.forEach(shot => {
                shot.update();
            });

            this._updateScore();

            this._time++;
            time = Math.floor(this._time / 60);
        }        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }

}