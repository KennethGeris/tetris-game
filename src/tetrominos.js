//default settings
export class Tetromino {
    constructor(){
        this.matrix = []
    }
}

//extend class for J piece
export class TetrominoJ extends Tetromino {
    constructor() {
        super()
        this.colour="J";
        this.matrix = [

        ]
    }
}