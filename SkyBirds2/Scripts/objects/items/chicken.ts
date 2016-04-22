/* Author: Selina Daley */
/* File: chicken.ts */
/* Last Modified Date: April 13, 2016 */
/* Description: This script is used to create a Chicken ally */

module objects {
    // CHICKEN CLASS ++++++++++++++++++++++++++++++++++++
    export class Chicken extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _shotCount: number = 1;
        private _time: number;
        private _count: number;
        private _startTime: number;
        private _fighting: boolean = false;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("chicken");

            this._count = 0;
            this._time = 0;
            this.y = -100;
            this.name = "chicken";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _moveAlly(): void {            
            this.y = -100;
        }
        
        // reset the ally
        public _reset(value: number): void {
            this._startTime = this._time;                      
            this.x = 100;
            this.y = Math.floor(Math.random() * 365);
            this._fighting = true;          
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this._count++;
            this._time = Math.floor(this._count / 60);
            
            if (this._startTime + 8 < this._time && this._fighting == true) {
                this._moveAlly();
                this._fighting = false;
                console.log("move ally");
            }
        }
    }
}