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
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        Bonus.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Bonus.prototype.start = function () {
            // Set Enemy Count
            this._alienCount = 5;
            this._darkCount = 2;
            livesValue = 5;
            scoreValue = 0;
            // Instantiate arrays
            this._aliens = new Array();
            this._darks = new Array();
            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            // added bomb to the scene
            this._bomb = new objects.Bomb();
            this.addChild(this._bomb);
            // added aliens to the scene
            for (var alien = 0; alien < this._alienCount; alien++) {
                this._aliens[alien] = new objects.Alien(alien);
                this.addChild(this._aliens[alien]);
            }
            // added darks to the scene
            for (var dark = 0; dark < this._darkCount; dark++) {
                this._darks[dark] = new objects.Dark(dark, this._darkCount);
                this.addChild(this._darks[dark]);
            }
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "40px Consolas", "#000000", 10, 460, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#000000", 290, 460, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Bonus.prototype.update = function () {
            var _this = this;
            this._bomb.update();
            this._collision.check(this._bomb);
            this._background.update();
            this._player.update();
            this._aliens.forEach(function (alien) {
                alien.update();
                _this._collision.check(alien);
            });
            this._darks.forEach(function (dark) {
                dark.update();
                _this._collision.check(dark);
            });
            this._updateScore();
        };
        return Bonus;
    })(objects.Scene);
    scenes.Bonus = Bonus;
})(scenes || (scenes = {}));
