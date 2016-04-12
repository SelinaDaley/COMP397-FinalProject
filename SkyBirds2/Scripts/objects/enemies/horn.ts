module objects {
    // HORN CLASS ++++++++++++++++++++++++++++++++++++
    export class Horn extends objects.SpriteGameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;
        private _enemyCount: number;
        private _shotCount: number = 1;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(num: number, enemyCount: number) {
            super("horn");
            
            this._num = num;
            this._enemyCount = enemyCount;
            this._speed.x -= 7; //enemy speed
            this._reset(this._rightBounds);
            this.name = "horn";
            this.enemyValue = 15;
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
        public _reset(value: number): void {

            if (this._firstSet) {
                this.x = value + (this._num * (1100 / this._enemyCount));//550);
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 365);
                //scoreValue += 15;   
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