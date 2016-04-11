module objects {
    // DARK CLASS ++++++++++++++++++++++++++++++++++++
    export class Dark extends objects.SpriteGameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;
        private _sinNum: number;
        private _darkCount: number;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(num: number, darkCount: number) {
            super("dark");

            this._num = num;
            this._darkCount = darkCount;
            this._sinNum = 0;
            this._speed.x -= 7; //enemy speed
            this._reset(this._rightBounds);
            this.name = "dark";
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
                this.x = value + (this._num * (1100 / this._darkCount));//550);
                this.y = Math.floor(Math.random() * 175);
                this._firstSet = false;
                this._sinNum = 0;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 175);
                scoreValue += 15;
                this._sinNum = 0;
            }
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this._sinNum += 0.05;
            // scroll the enemy -5 px per frame
            this.x += this._speed.x;
            this.y = this.y + (Math.sin(this._sinNum) * 4); 
            this._checkBounds(this._leftBounds);
        }
    }
}