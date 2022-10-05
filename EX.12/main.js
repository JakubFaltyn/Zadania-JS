let ghost = document.querySelector('.fa-snapchat-ghost')
const {style} = ghost;

window.addEventListener('load', () => {
    style.position = 'absolute';
    style.left = '50%';
    style.top = '50%';
})

window.addEventListener('keydown', (event) => {
    console.log(style.top);
    switch (event.key) {
        case 'ArrowUp': 
            style.top = (parseInt(style.top) - 3) + '%';
            break;
        case 'ArrowDown': 
            style.top = (parseInt(style.top) + 3) + '%'; break;
        case 'ArrowLeft': 
            style.left = (parseInt(style.left) - 3) + '%'; break;
        case 'ArrowRight': 
            style.left = (parseInt(style.left) + 3) + '%'; break;
    }
});