/* Author: Selina Daley */
/* File: eye.ts */
/* Last Modified Date: April 13, 2016 */
/* Description: This script is used to create an Eye boss enemy */

module objects {
    // EYE CLASS ++++++++++++++++++++++++++++++++++++
    export class Eye extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;
        private _sinNum: number;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("eye");
            
            this._sinNum = 0;
            this.name = "eye";
            this.x = 700;
            this.enemyValue = 300;
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

            /*if (this._firstSet) {
                this.x = value + (this._num * (1100 / this._darkCount));//550);
                this.y = Math.floor(Math.random() * 175);
                this._firstSet = false;
                this._sinNum = 0;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 175);
                //scoreValue += 15;
                this._sinNum = 0;
            }*/
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this._sinNum += 0.05;
            // update boss movement
            //this.x += this._speed.x;
            this.y = this.y + (Math.sin(this._sinNum) * 5);
            this._checkBounds(this._leftBounds);
        }
    }
}