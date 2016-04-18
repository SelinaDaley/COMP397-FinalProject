/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var textureAtlas;
var textureAtlas2;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var nextLevelValue;
var highScoreValue = 0;
var level;
var time = 0;
var timeBonus = 0;
// Game Scenes
var menu;
var level1;
var level2;
var level3;
var bonus;
var nextlevel;
//var instructions: scenes.Instructions;
var end;
var complete;
var atlas = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [1, 1, 100, 91, 0, 0, 0],
        [1, 94, 92, 82, 0, -4, -4],
        [1, 178, 55, 71, 0, 0, 0],
        [103, 1, 82, 81, 0, -9, -5],
        [187, 1, 95, 65, 0, 0, 0],
        [284, 1, 90, 67, 0, 0, 0],
        [376, 1, 90, 65, 0, 0, 0],
        [468, 1, 90, 65, 0, 0, 0],
        [560, 1, 90, 65, 0, 0, 0],
        [652, 1, 95, 60, 0, 0, 0],
        [749, 1, 95, 60, 0, 0, 0],
        [846, 1, 95, 56, 0, 0, 0],
        [943, 1, 95, 56, 0, 0, 0],
        [1040, 1, 95, 56, 0, 0, 0],
        [1137, 1, 95, 56, 0, 0, 0],
        [58, 178, 42, 71, 0, 0, 0],
        [187, 68, 95, 56, 0, 0, 0],
        [284, 70, 89, 65, 0, 0, 0],
        [652, 63, 89, 65, 0, 0, 0],
        [743, 63, 89, 65, 0, 0, 0],
        [846, 59, 89, 65, 0, 0, 0],
        [937, 59, 86, 65, 0, 0, 0],
        [1025, 59, 86, 60, 0, 0, 0],
        [1113, 59, 86, 60, 0, 0, 0],
        [1201, 59, 45, 64, 0, 0, 0],
        [1025, 121, 86, 58, 0, 0, 0],
        [1113, 121, 86, 58, 0, 0, 0],
        [1201, 125, 45, 59, 0, 0, 0],
        [103, 84, 80, 26, 0, 0, 0],
        [95, 112, 86, 58, 0, 0, 0],
        [102, 172, 70, 69, 0, -15, -11],
        [183, 126, 86, 58, 0, 0, 0],
        [174, 186, 86, 58, 0, 0, 0],
        [271, 137, 76, 81, 0, -12, -5],
        [349, 137, 58, 66, 0, 0, 0],
        [375, 70, 67, 65, 0, 0, 0],
        [444, 68, 74, 62, 0, 0, 0],
        [520, 68, 74, 62, 0, 0, 0],
        [596, 68, 50, 59, 0, 0, 0],
        [596, 68, 50, 59, 0, 0, 0],
        [409, 137, 58, 66, 0, 0, 0],
        [469, 132, 73, 62, 0, 0, 0],
        [544, 132, 70, 62, 0, 0, 0],
        [616, 130, 73, 62, 0, 0, 0],
        [691, 130, 70, 62, 0, 0, 0],
        [763, 130, 70, 62, 0, 0, 0],
        [835, 126, 62, 60, 0, 0, 0],
        [899, 126, 62, 60, 0, 0, 0],
        [963, 126, 58, 60, 0, 0, 0],
        [262, 220, 67, 26, 0, 0, 0],
        [349, 205, 61, 26, 0, 0, 0],
        [412, 205, 61, 26, 0, 0, 0],
        [475, 196, 50, 50, 0, 0, 0],
        [527, 196, 50, 43, 0, 0, -7],
        [579, 196, 50, 43, 0, 0, -9],
        [631, 194, 50, 41, 0, 0, -9],
        [683, 194, 50, 41, 0, 0, -9],
        [735, 194, 50, 41, 0, 0, -9],
        [787, 194, 50, 41, 0, 0, -9],
        [839, 188, 61, 60, 0, 0, 0],
        [902, 188, 61, 60, 0, 0, 0],
        [965, 188, 48, 59, 0, 0, 0],
        [1015, 188, 48, 59, 0, 0, 0],
        [1065, 181, 45, 64, 0, 0, 0],
        [1112, 181, 50, 41, 0, 0, -9]
    ],
    "animations": {
        "horn": {
            "frames": [48, 59, 46, 34, 2, 40, 47, 60],
            "speed": 0.20
        },
        "eagle": {
            "frames": [11, 12, 13, 9, 4, 10, 14, 16],
            "speed": 0.20
        },
        "alien": {
            "frames": [25, 26, 29, 22, 21, 23, 31, 32],
            "speed": 0.20
        },
        "dark": {
            "frames": [42, 41, 36, 44, 35, 45, 37, 43],
            "speed": 0.25
        },
        "bomb": {
            "frames": [27, 61, 38, 24, 15, 63, 39, 62],
            "speed": 0.5
        },
        "crystal": {
            "frames": [52, 53, 55, 56, 54, 57, 58, 64],
            "speed": 0.5
        },
        "rocket": {
            "frames": [50, 49, 28, 51],
            "speed": 0.5
        }
    }
};
var atlas2 = {
    "images": [
        "../../Assets/images/atlas2.png"
    ],
    "frames": [
        [1, 1, 199, 232, 0, -1, 0],
        [1, 235, 199, 232, 0, -1, 0],
        [1, 469, 40, 40, 0, 0, 0],
        [43, 469, 40, 40, 0, 0, 0],
        [85, 469, 40, 40, 0, 0, 0],
        [127, 469, 40, 40, 0, 0, 0],
        [169, 469, 80, 26, 0, 0, 0],
        [202, 1, 193, 232, 0, -1, 0],
        [202, 235, 192, 232, 0, -1, 0],
        [251, 469, 67, 26, 0, 0, 0],
        [320, 469, 61, 26, 0, 0, 0],
        [383, 469, 61, 26, 0, 0, 0],
        [396, 235, 184, 232, 0, 0, 0],
        [397, 1, 184, 232, 0, -1, 0],
        [446, 469, 80, 18, 0, 0, 0],
        [446, 489, 80, 18, 0, 0, 0],
        [582, 235, 184, 232, 0, -1, 0],
        [583, 1, 174, 232, 0, -1, 0],
        [759, 1, 100, 91, 0, 0, 0],
        [759, 94, 90, 90, 0, 0, 0],
        [861, 1, 92, 82, 0, -4, -4],
        [955, 1, 90, 90, 0, 0, 0],
        [861, 85, 90, 67, 0, 0, 0],
        [953, 93, 90, 65, 0, 0, 0],
        [1045, 93, 40, 57, 0, 0, 0],
        [1045, 152, 40, 57, 0, 0, 0],
        [851, 154, 90, 65, 0, 0, 0],
        [768, 186, 76, 81, 0, -12, -5],
        [943, 160, 90, 65, 0, 0, 0],
        [846, 221, 89, 65, 0, 0, 0],
        [768, 269, 70, 69, 0, -15, -11],
        [1035, 211, 40, 57, 0, 0, 0],
        [937, 227, 89, 65, 0, 0, 0],
        [1028, 270, 55, 71, 0, 0, 0],
        [840, 288, 89, 65, 0, 0, 0],
        [931, 294, 89, 65, 0, 0, 0],
        [1022, 343, 62, 60, 0, 0, 0],
        [768, 340, 62, 60, 0, 0, 0],
        [832, 355, 82, 81, 0, -9, -5],
        [768, 402, 61, 60, 0, 0, 0],
        [831, 438, 58, 66, 0, 0, 0],
        [891, 438, 58, 66, 0, 0, 0],
        [951, 361, 61, 60, 0, 0, 0],
        [1014, 405, 58, 60, 0, 0, 0],
        [951, 423, 40, 57, 0, 0, 0]
    ],
    "animations": {
        "eye": {
            "frames": [12, 8, 0, 13, 17, 16, 1, 7],
            "speed": 0.25
        },
        "explosion": {
            "frames": [20, 18, 38, 27, 30],
            "speed": 0.5
        },
        "chicken": {
            "frames": [29, 32, 34, 35, 22, 23, 26, 28],
            "speed": 0.5
        },
        "pBomb": {
            "frames": [24, 25, 31, 44],
            "speed": 0.5
        },
        "coin": [2],
        "heal": [3],
        "invincible": [4],
        "life": [5],
        "eShot": [14],
        "pShot": [15],
        "eExplosion": [19],
        "pExplosion": [21]
    }
};
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "InstructionButton", src: "../../Assets/images/InstructionButton.png" },
    { id: "MenuButton", src: "../../Assets/images/MenuButton.png" },
    { id: "bkgd", src: "../../Assets/images/bkgd.png" },
    { id: "bkgd2", src: "../../Assets/images/bkgd2.png" },
    { id: "bkgd3", src: "../../Assets/images/bkgd3.png" },
    { id: "bkgd4", src: "../../Assets/images/bkgd4.png" },
    { id: "fullBackground", src: "../../Assets/images/FullBackground.png" },
    { id: "gameOver", src: "../../Assets/images/GameOverBackground.png" },
    { id: "gameComplete", src: "../../Assets/images/GameCompleteBackground.png" },
    { id: "logo", src: "../../Assets/images/logo2.png" },
    { id: "introMusic", src: "../../Assets/audio/8-punk-8-bit-music.mp3" },
    { id: "gameMusic", src: "../../Assets/audio/POL-starry-night-short.wav" },
    { id: "endMusic", src: "../../Assets/audio/8-bit-music.mp3" },
    { id: "itemSound", src: "../../Assets/audio/coin10.wav" },
    { id: "explosionSound", src: "../../Assets/audio/BombExplosion.wav" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // instantiate textureAtlas
    textureAtlas = new createjs.SpriteSheet(atlas);
    // instantiate textureAtlas
    textureAtlas2 = new createjs.SpriteSheet(atlas2);
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.LEVEL1:
            // show the LEVEL1 scene
            stage.removeAllChildren();
            level1 = new scenes.Level1();
            currentScene = level1;
            console.log("Starting LEVEL1 Scene");
            break;
        case config.Scene.LEVEL2:
            // show the LEVEL2 scene
            stage.removeAllChildren();
            level2 = new scenes.Level2();
            currentScene = level2;
            console.log("Starting LEVEL2 Scene");
            break;
        case config.Scene.LEVEL3:
            // show the LEVEL3 scene
            stage.removeAllChildren();
            level3 = new scenes.Level3();
            currentScene = level3;
            console.log("Starting LEVEL3 Scene");
            break;
        case config.Scene.BONUS:
            // show the BONUS scene
            stage.removeAllChildren();
            bonus = new scenes.Bonus();
            currentScene = bonus;
            console.log("Starting BONUS Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.COMPLETE:
            // show the COMPLETE scene
            stage.removeAllChildren();
            complete = new scenes.Complete();
            currentScene = complete;
            console.log("Starting COMPLETE Scene");
            break;
        case config.Scene.NEXTLEVEL:
            // show the NEXTLEVEL scene
            stage.removeAllChildren();
            nextlevel = new scenes.NextLevel();
            currentScene = nextlevel;
            console.log("Starting NEXTLEVEL Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
