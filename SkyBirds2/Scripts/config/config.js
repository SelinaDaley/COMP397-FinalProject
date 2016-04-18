/* Author: Selina Daley */
/* File: config.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to handle the configurations */
var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.LEVEL1 = 1;
        Scene.LEVEL2 = 2;
        Scene.LEVEL3 = 3;
        Scene.BONUS = 4;
        Scene.INSTRUCTIONS = 5;
        Scene.END = 6;
        Scene.COMPLETE = 7;
        Scene.NEXTLEVEL = 8;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 512;
        Screen.CENTER_X = 612;
        Screen.CENTER_Y = 256;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
