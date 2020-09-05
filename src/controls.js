const KEY = { ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 }
var Controls = {
    keyHandler(e) {
        switch(e.keyCode) {
            case KEY.UP: this.handleRotation();
                break;
            case KEY.DOWN: this.makeMove(KEY.DOWN);
                break;
            case KEY.RIGHT: this.makeMove(KEY.RIGHT);
                break;
            case KEY.LEFT: this.makeMove(KEY.LEFT);
                break;
            case KEY.SPACE: this.makeMove(KEY.SPACE);
                break;            
            case KEY.ESC: this.pauseGame();
                break;
          }
    },
    makeMove(e){
        console.log(e)
    },
    handleRotation(){
        console.log('rotate block')
    },
    pauseGame(){
        console.log('show pause menu')
    }
}

export default Controls;