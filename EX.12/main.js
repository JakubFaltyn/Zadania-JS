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
        38: function() {style.top = (parseInt(style.top) - 3) + '%';},
        40: function() {style.top = (parseInt(style.top) + 3) + '%';},
        37: function() {style.left = (parseInt(style.left) - 3) + '%';},
        39: function() {style.left = (parseInt(style.left) + 3) + '%';}
    }

    document.onkeydown= function(event) {
        var key= (event).keyCode;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            timers[key]= setInterval(keys[key], 200);
        }
        return false;
    };

    document.onkeyup= function(event) {
        var key= (event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };
};

KeyboardController();