/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var level1;
var level2;
var level3;
var bonus;
//var instructions: scenes.Instructions;
var end;
//var complete: scenes.Complete;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "bkgd", src: "../../Assets/images/bkgd.png" },
    { id: "bkgd2", src: "../../Assets/images/bkgd2.png" },
    { id: "bkgd3", src: "../../Assets/images/bkgd3.png" },
    { id: "bkgd4", src: "../../Assets/images/bkgd4.png" },
    { id: "logo", src: "../../Assets/images/logo2.png" },
    { id: "hero", src: "../../Assets/images/hero2.png" },
    { id: "life", src: "../../Assets/images/life2.png" },
    { id: "alien", src: "../../Assets/images/alien2.png" },
    { id: "bomb", src: "../../Assets/images/bomb2.png" },
    { id: "dark", src: "../../Assets/images/dark2.png" },
    { id: "horn", src: "../../Assets/images/horn2.png" },
    { id: "introMusic", src: "../../Assets/audio/8-punk-8-bit-music.mp3" },
    { id: "gameMusic", src: "../../Assets/audio/POL-starry-night-short.wav" },
    { id: "endMusic", src: "../../Assets/audio/8-bit-music.mp3" },
    { id: "explosionMusic", src: "../../Assets/audio/BombExplosion.wav" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
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
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
