/* Author: Selina Daley */
/* File: invincible.ts */
/* Last Modified Date: April 18, 2016 */
/* Description: This script is used to make the player gain an ally */

module objects {
    // INVINCIBLE CLASS ++++++++++++++++++++++++++++++++++++
    export class Invincible extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _firstSet: boolean = true;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("invincible");

            this._speed.y = 5; //item speed
            this._reset(this._topBounds);
            this.name = "invincible";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the item is outside the viewport         
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        }
        
        // reset the item offscreen
        public _reset(value: number): void {

            if (this._firstSet) {
                this.x = Math.floor(Math.random() * 500);
                this.y = value - 4000;
                this._firstSet = false;
            }
            else {
                this.x = Math.floor(Math.random() * 500);
                this.y = value - 7000;
            }
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the enemy -5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}