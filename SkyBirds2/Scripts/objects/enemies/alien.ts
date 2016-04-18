/* Author: Selina Daley */
/* File: alien.ts */
/* Last Modified Date: April 13, 2016 */
/* Description: This script is used to create a Alien enemy */


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
            this._speed.x -= Math.floor(Math.random() * 3) + 5;//6; //enemy speed
            this._reset(this._rightBounds);
            this.name = "alien";
            this.enemyValue = 10;
            //this.soundString = "yay";
            console.log(this._speed.x);
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

            //this._speed.x = Math.floor(Math.random() * 4) + 5;

            if (this._firstSet) {
                this.x = value + (this._num * 250);
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 365); 
                //scoreValue += 5;               
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