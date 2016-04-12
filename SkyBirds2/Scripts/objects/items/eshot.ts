module objects {
    // ESHOT CLASS ++++++++++++++++++++++++++++++++++++
    export class Eshot extends objects.SpriteGameObject2 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _num: number;        
        private _firstSet: boolean = true;


        private _enemy: objects.Horn;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(enemy: objects.Horn) {
            super("eShot");
            
            this._enemy = enemy;
            this._speed.x -= 10; //enemy speed
            this._reset(this._rightBounds);
            this.name = "eShot";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the right of the item is outside the viewport         
            if (this.x <= value) {                
                this._reset(this._rightBounds);                
            }
        }
        
        // reset the enemy offscreen
        public _reset(value: number): void {

            if (this._firstSet) {
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 25;
                this._firstSet = false;
            }
            else {
                this.x = this._enemy.x - 80;
                this.y = this._enemy.y + 25;                
            }
        }        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the shot -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}
