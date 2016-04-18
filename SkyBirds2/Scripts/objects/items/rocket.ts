/* Author: Selina Daley */
/* File: rocket.ts */
/* Last Modified Date: April 18, 2016 */
/* Description: This script is used to create an enemy rocket */

module objects {
    // ROCKET CLASS ++++++++++++++++++++++++++++++++++++
    export class Rocket extends objects.SpriteGameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;
        private _firstSet: boolean = true;
        private _startTime: number;
        private _shotTime: number;
        private _enemyCount: number;
        private _time;
        private _count;
        private _fireRate = Math.floor(Math.random() * 2);
        private _enemy: objects.Eye;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(num: number, enemyCount: number, enemy: objects.Eye) {
            super("rocket");

            this._enemy = enemy;
            this._num = num;
            this._enemyCount = enemyCount;
            this._speed.x -= 10; //enemy speed
            this._reset(this._rightBounds);
            this.name = "rocket";
            this.enemyValue = 5;
            this._count = 0;
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the item is outside the viewport         
            /*if (this.x <= value && this._time > this._fireRate) {
                this._fireRate = this._time + Math.floor(Math.random() * 2);
                this._reset(this._rightBounds);
            }*/
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the enemy offscreen
        public _reset(value: number): void {

            if (this._firstSet) {
            
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 25 * this._num;
                this._firstSet = false;
            }
            else //if (this._time > this._fireRate)
            {
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 25 * this._num;
            }
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the shot -5 px per frame
            this.x += this._speed.x;
            this._count++;
            this._time = Math.floor(this._count / 60);
            this._checkBounds(this._leftBounds);
        }
    }
}
