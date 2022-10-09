let ghost = document.querySelector('.fa-snapchat-ghost')
const {style} = ghost;

window.addEventListener('load', () => {
    style.position = 'absolute';
    style.left = '50%';
    style.top = '50%';
})

KeyboardController({
    38: function() {style.top = (parseInt(style.top) - 3) + '%';},
    40: function() {style.top = (parseInt(style.top) + 3) + '%';},
    37: function() {style.left = (parseInt(style.left) - 3) + '%';},
    39: function() {style.left = (parseInt(style.left) + 3) + '%';}
}, 200);

function KeyboardController(keys, repeat) {
    var timers= {};
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };
};