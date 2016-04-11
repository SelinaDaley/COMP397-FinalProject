module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static LEVEL1: number = 1;
        public static LEVEL2: number = 2;
        public static LEVEL3: number = 3;
        public static BONUS: number = 4;
        public static INSTRUCTIONS: number = 5;
        public static END: number = 6;
        public static COMPLETE: number = 7;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 1024;
        public static HEIGHT: number = 512;
        public static CENTER_X: number = 612;
        public static CENTER_Y: number = 256;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}