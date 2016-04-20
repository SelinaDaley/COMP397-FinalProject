// LEVEL 3 SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.Background;
        private _collision: managers.Collision;
        private _shotcollision: managers.ShotCollision[];

        private _aliens: objects.Alien[];
        private _alienCount: number;
        private _darks: objects.Dark[];
        private _darkCount: number;
        private _horns: objects.Horn[];
        private _shot: objects.Eshot[];
        private _hornCount: number;
        private _bomb: objects.Bomb;

        private _life: objects.Life;
        private _player: objects.Player;
        private _chicken: objects.Chicken;
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
            this._darkCount = 2;
            this._hornCount = 2;
            this._shotCount = 1;
            level = 3;
            nextLevelValue = 600;            
            
            // Instantiate arrays
            this._aliens = new Array<objects.Alien>();
            this._darks = new Array<objects.Dark>();
            this._horns = new Array<objects.Horn>();
            this._shot = new Array<objects.Eshot>();
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

            // added darks to the scene
            for (var dark: number = 0; dark < this._darkCount; dark++) {
                this._darks[dark] = new objects.Dark(dark, this._darkCount);
                this.addChild(this._darks[dark]);
            }

            // added horns to the scene
            for (var horn: number = 0; horn < this._hornCount; horn++) {
                this._horns[horn] = new objects.Horn(horn, this._hornCount);
                this._shot[horn] = new objects.Eshot(this._horns[horn]);
                this.addChild(this._horns[horn]);
                this.addChild(this._shot[horn]);
            }

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added ally chicken to the scene
            this._chicken = new objects.Chicken();
            this.addChild(this._chicken);

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
            this._collision = new managers.Collision(this._player, this._chicken);

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

            this._darks.forEach(dark => {
                dark.update();
                this._collision.check(dark);

                this._shotcollision.forEach(shot => {
                    shot.check(dark);
                });
            });

            this._horns.forEach(horn => {
                horn.update();
                this._collision.check(horn);

                this._shotcollision.forEach(shot => {
                    shot.check(horn);
                });
            });

            this._shot.forEach(shot => {
                shot.update();
                this._collision.check2(shot);
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