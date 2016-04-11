module objects {
    // BOMB CLASS ++++++++++++++++++++++++++++++++++++
    export class Bomb extends objects.SpriteGameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _firstSet: boolean = true;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("bomb");
            
            this._speed.x -= 10; //enemy speed
            this._reset(this._rightBounds);
            this.name = "bomb";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the enemy
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the enemy offscreen
        protected _reset(value: number): void {        
            
            if (this._firstSet) {
                this.x = value + 1000;
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false; 
            }
            else {
                this.x = value + 1000;
                this.y = Math.floor(Math.random() * 365);  
                scoreValue += 10;
            }                  
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}