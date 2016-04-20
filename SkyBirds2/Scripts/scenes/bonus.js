var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// BONUS SCENE
var scenes;
(function (scenes) {
    var Bonus = (function (_super) {
        __extends(Bonus, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Bonus() {
            _super.call(this);
            this._time = 0;
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        Bonus.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
            this._timeLabel.text = "Time: " + Math.floor(this._time / 60);
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Bonus.prototype.start = function () {
            // Set Enemy Count
            //this._alienCount = 5;
            this._shotCount = 1;
            this._rocketCount = 3;
            level = 4;
            //nextLevelValue = 500;            
            // Instantiate arrays
            //this._aliens = new Array<objects.Alien>();
            this._shots = new Array();
            this._rockets = new Array();
            this._shotcollision = new Array();
            // add the background image
            this._background = new createjs.Bitmap(assets.getResult("bkgd4"));
            this.addChild(this._background);
            // added eye boss to the scene
            this._eye = new objects.Eye();
            this.addChild(this._eye);
            // added darks to the scene
            for (var rocket = 0; rocket < this._rocketCount; rocket++) {
                this._rockets[rocket] = new objects.Rocket(rocket, this._rocketCount, this._eye);
                this.addChild(this._rockets[rocket]);
            }
            // added life to the scene
            this._invincible = new objects.Invincible();
            this.addChild(this._invincible);
            /*// added aliens to the scene
            for (var alien: number = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }*/
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added player shots to the scene
            for (var shot = 0; shot < this._shotCount; shot++) {
                this._shots[shot] = new objects.Pshot(this._player);
                this.addChild(this._shots[shot]);
                // added shotcollision manager to the scene
                this._shotcollision[shot] = new managers.ShotCollision(this._shots[shot]);
            }
            //added ally chicken to the scene
            this._chicken = new objects.Chicken();
            this.addChild(this._chicken);
            this._shots2 = new objects.Ashot(this._chicken);
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "40px Consolas", "#000000", 10, 460, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#000000", 290, 460, false);
            this.addChild(this._scoreLabel);
            //added TimeLabel to the scene
            this._timeLabel = new objects.Label("Time: " + Math.floor(this._time / 60), "40px Consolas", "#000000", 590, 460, false);
            this.addChild(this._timeLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player, this._chicken);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Bonus.prototype.update = function () {
            var _this = this;
            this._eye.update();
            this._shotcollision.forEach(function (shot) {
                shot.check2(_this._eye);
            });
            this._rockets.forEach(function (rocket) {
                rocket.update();
                _this._collision.check(rocket);
                _this._shotcollision.forEach(function (shot) {
                    shot.check(rocket);
                });
            });
            //this._shotcollision.c
            this._invincible.update();
            this._collision.check2(this._invincible);
            this._player.update();
            this._chicken.update();
            /*this._aliens.forEach(alien => {
                alien.update();
                this._collision.check(alien);

                this._shotcollision.forEach(shot => {
                    shot.check(alien);
                });
            });*/
            this._shots.forEach(function (shot) {
                shot.update();
            });
            this._updateScore();
            this._time++;
            time = Math.floor(this._time / 60);
        };
        return Bonus;
    })(objects.Scene);
    scenes.Bonus = Bonus;
})(scenes || (scenes = {}));
