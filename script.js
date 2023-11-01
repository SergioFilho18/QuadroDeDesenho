// Initial Data
let currentColor = 'black';
let canDraw = false;

let screen = document.querySelector("#tela");
let ctx = screen.getContext('2d');

// Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);


/* passo a passo para desenhar no canvas:
- Quando o click do mouse ABAIXAR, ative o modo desenho.
- Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.
- Quando o click do mouse LEVANTAR, desative o modo desenho.
*/ 

// Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.toggle('active');
}
function mouseDownEvent() {
    canDraw = true;
}
function mouseMoveEvent(e) {
    if(canDraw){
        let pointX = e.pageX - screen.offsetLeft;
        
    }
}
function mouseUpEvent(){
    canDraw = false;
}