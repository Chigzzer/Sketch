const container = document.querySelector('#container');


// Section that automatically sizes the sketch pad.
const sketchPadSize = 320;
container.style.width = sketchPadSize + 'px';
container.style.height = sketchPadSize + 'px';

createDivs(16);
let squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('.reset');
const sizeSquare = document.querySelector('.drawSize');


console.log(squares);
squares.forEach(element => element.addEventListener('mouseover', draw));
resetButton.addEventListener('click', reset);
sizeSquare.addEventListener('click', changeSquareSize);


function createDivs(size){
    for (let i = 0; i < (size*size); i++){
        console.log(`Running ${size}`);
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = (sketchPadSize/size) + 'px';
        div.style.height = (sketchPadSize/size) + 'px';
        container.appendChild(div);
    }
    return;
}

function draw(){
    console.log("Draw runned");
    this.classList.add('hovered');
}

function reset(){
    console.log('reset ran');
    squares.forEach(element => element.classList.remove('hovered'));
}

function changeSquareSize(){
    const newSize = prompt("Number of squares per side>", 16);
    console.log(newSize);   
    reset();
    squares.forEach(element => element.remove());
    createDivs(newSize);
    squares = document.querySelectorAll('.square');
    squares.forEach(element => element.addEventListener('mouseover', draw));
}


