var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 1 SCENE
var scenes;
(function (scenes) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level1() {
            _super.call(this);
            this._time = 0;
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        Level1.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
            this._timeLabel.text = "Time: " + Math.floor(this._time / 60);
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level1.prototype.start = function () {
            // Set Enemy Count
            this._alienCount = 5;
            this._shotCount = 1;
            livesValue = 5;
            scoreValue = 0;
            timeBonus = 0;
            level = 1;
            nextLevelValue = 200;
            count = 0;
            // Instantiate arrays
            this._aliens = new Array();
            this._shots = new Array();
            this._shotcollision = new Array();
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
            for (var alien = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added ally chicken to the scene
            this._chicken = new objects.Chicken();
            this.addChild(this._chicken);
            // added player shots to the scene
            for (var shot = 0; shot < this._shotCount; shot++) {
                this._shots[shot] = new objects.Pshot(this._player);
                this.addChild(this._shots[shot]);
                // added shotcollision manager to the scene
                this._shotcollision[shot] = new managers.ShotCollision(this._shots[shot]);
            }
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "40px Consolas", "#ffffff", 10, 460, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffffff", 290, 460, false);
            this.addChild(this._scoreLabel);
            //added TimeLabel to the scene
            this._timeLabel = new objects.Label("Time: " + Math.floor(this._time / 60), "40px Consolas", "#ffffff", 590, 460, false);
            this.addChild(this._timeLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player, this._chicken);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level1.prototype.update = function () {
            var _this = this;
            this._bomb.update();
            this._collision.check(this._bomb);
            this._shotcollision.forEach(function (shot) {
                shot.check(_this._bomb);
            });
            this._life.update();
            this._collision.check2(this._life);
            this._background.update();
            this._player.update();
            this._aliens.forEach(function (alien) {
                alien.update();
                _this._collision.check(alien);
                _this._shotcollision.forEach(function (shot) {
                    shot.check(alien);
                });
            });
            this._shots.forEach(function (shot) {
                shot.update();
            });
            this._updateScore();
            this._time++;
            time = Math.floor(this._time / 60);
        };
        return Level1;
    })(objects.Scene);
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
