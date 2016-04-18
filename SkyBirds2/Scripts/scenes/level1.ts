// LEVEL 1 SCENE
module scenes {
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.Background;
        private _collision: managers.Collision;
        private _shotcollision: managers.ShotCollision[];

        private _aliens: objects.Alien[];
        private _alienCount: number;
        private _bomb: objects.Bomb;

        private _life: objects.Life;
        private _player: objects.Player;
        private _shots: objects.Pshot[];
        private _shotCount: number;
        
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
            this._alienCount = 5;
            this._shotCount = 1;
            livesValue = 5;
            scoreValue = 0;
            level = 1;
            nextLevelValue = 200;            
            
            // Instantiate arrays
            this._aliens = new Array<objects.Alien>();
            this._shots = new Array<objects.Pshot>();
            this._shotcollision = new Array<managers.ShotCollision>();

            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            // added bomb to the scene
            this._bomb = new objects.Bomb();
            this.addChild(this._bomb);
            
            // added life to the scene
            this._life = new objects.Life();
            this.addChild(this._life);

            // added aliens to the scene
            for (var alien: number = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }
            
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
                "#ffffff",
                10, 460, false
            );
            this.addChild(this._livesLabel);
            
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#ffffff",
                290, 460, false
            );
            this.addChild(this._scoreLabel);

            //added TimeLabel to the scene
            this._timeLabel = new objects.Label(
                "Time: " + Math.floor(this._time / 60),
                "40px Consolas",
                "#ffffff",
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

            this._bomb.update();
            this._collision.check(this._bomb);            
            this._shotcollision.forEach(shot => {
                shot.check(this._bomb);
            });          

            this._life.update();
            this._collision.check2(this._life);
            
            this._background.update();
            this._player.update();

            this._aliens.forEach(alien => {
                alien.update();
                this._collision.check(alien);
                
                this._shotcollision.forEach(shot => {
                    shot.check(alien);
                });
            });
                        
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