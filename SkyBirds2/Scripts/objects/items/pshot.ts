/* Author: Selina Daley */
/* File: pshot.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to create a player bullet */

module objects {
    // PSHOT CLASS ++++++++++++++++++++++++++++++++++++
    export class Pshot extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;

        // PUBLIC INSTANCE VARIABLES ++++++++++++++++++
        public player: objects.Player;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(player: objects.Player) {
            super("pShot");

            this.player = player;
            this._speed.x = 10; //enemy speed
            this._reset(this._leftBounds);
            this.name = "pShot";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the item is outside the viewport         
            if (this.x >= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the enemy offscreen
        public _reset(value: number): void {

            if (this._firstSet) {
                this.x = this.player.x + 1020;
                this.y = this.player.y;
                this._firstSet = false;
            }
            else {
                this.x = this.player.x + 50;
                this.y = this.player.y;
            }
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the shot 10 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}
