/* Author: Selina Daley */
/* File: life.ts */
/* Last Modified Date: April 12, 2016 */
/* Description: This script is used to make the player gain a life */

module objects {
    // ALIEN CLASS ++++++++++++++++++++++++++++++++++++
    export class Life extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _firstSet: boolean = true;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("life");

            this._speed.x -= 8; //item speed
            this._reset(this._rightBounds);
            this.name = "life";
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
        
        // reset the item offscreen
        public _reset(value: number): void {

            if (this._firstSet) {
                this.x = value + 4000;
                this.y = Math.floor(Math.random() * 365);
                this._firstSet = false;
            }
            else {
                this.x = value + 4000;
                this.y = Math.floor(Math.random() * 365);
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