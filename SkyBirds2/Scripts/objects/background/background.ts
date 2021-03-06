﻿/* Author: Selina Daley */
/* File: background.ts */
/* Last Modified Date: April 15, 2016 */
/* Description: This script is used to scroll the background image */

module objects {
    // BACKGROUND CLASS ++++++++++++++++++++++++++++++++++++
    export class Background extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {

            if (level == 1) {
                super("bkgd");
            }
            else if (level == 2) {
                super("bkgd2");
            }
            else if (level == 3) {
                super("bkgd3");
            }
            else if (level == 4) {
                super("bkgd4");
            }

            this._speed.x -= 8; //background speed
            this._reset(10);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the background 
            // is met the right of the scene
            
            if (this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the background offscreen
        protected _reset(value: number): void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the background 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-1024);
        }
    }
}