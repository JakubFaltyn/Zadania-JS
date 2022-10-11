let ghost = document.querySelector('.fa-snapchat-ghost')
const {style} = ghost;

window.addEventListener('load', () => {
    style.position = 'absolute';
    style.left = '50%';
    style.top = '50%';
})

function KeyboardController() {
    var timers= {};
    var keys = {
        ArrowUp() {style.top = (parseInt(style.top) - 3) + '%';},
        ArrowDown() {style.top = (parseInt(style.top) + 3) + '%';},
        ArrowLeft() {style.left = (parseInt(style.left) - 3) + '%';},
        ArrowRight() {style.left = (parseInt(style.left) + 3) + '%';}
    }

    document.onkeydown= function(event) {
        var key= (event).key;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            timers[key]= setInterval(keys[key], 200);
        }
        return false;
    };

    document.onkeyup= function(event) {
        var key= (event).key;
        if (key in timers && timers[key]!==null) {
            clearInterval(timers[key]);
            delete timers[key];
        }
    };
};

KeyboardController();