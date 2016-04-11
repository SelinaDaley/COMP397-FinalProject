module objects {
    // ALIEN CLASS ++++++++++++++++++++++++++++++++++++
    export class Alien extends objects.SpriteGameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(num:number) {
            super("alien");

            this._num = num;
            this._speed.x -= 5; //enemy speed
            this._reset(this._rightBounds);
            this.name = "alien";
            //this.soundString = "yay";
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
                this.x = value + (this._num * 250);
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 365); 
                scoreValue += 5;               
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