import Controls from './controls';
import Tetrominos from './tetrominos';

//init controls
document.addEventListener('keydown', (e) => {
    Controls.keyHandler(e);
})

