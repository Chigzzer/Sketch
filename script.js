const container = document.querySelector('#container');
let paintColour = 'black';
const rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let rainbowIndex = 0;
// Section that automatically sizes the sketch pad.
let sketchPadSize = 320;
container.style.width = sketchPadSize + 'px';
container.style.height = sketchPadSize + 'px';

createDivs(16);
let squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#reset');
const sizeSquare = document.querySelector('.drawSize');
const padButton = document.querySelector('#padChange');
const colourChooser = document.querySelectorAll('.colourButton');
const normalButton = document.querySelector('#normal');
const rainbowButton = document.querySelector('#rainbow');
const erasor = document.querySelector('#erasor');
const colourDiv = document.querySelector('#colours');
console.log(squares);
squares.forEach(element => element.addEventListener('mouseover', draw));

resetButton.addEventListener('click', reset);
sizeSquare.addEventListener('click', changeSquareSize);
colourChooser.forEach(element => element.addEventListener('click', changeColour));
padButton.addEventListener('click', changePadSize);
normalButton.addEventListener('click', normalColour);
rainbowButton.addEventListener('click', rainbowColour);
erasor.addEventListener('click', erase);

function erase(){
    rainbowButton.removeAttribute('style');
    erasor.setAttribute('style', 'background-color: black; color: white');
    normalButton.removeAttribute('style');

    squares.forEach(element => element.removeEventListener('mouseover', drawRainbow));
    squares.forEach(element => element.removeEventListener('mouseover', draw));
    squares.forEach(element => element.addEventListener('click', eraseSquare));
}

function eraseSquare(){
    this.style.backgroundColor = 'white';
}

function normalColour(){
    erasor.removeAttribute('style');
    normalButton.setAttribute('style', 'background-color: black; color: white');
    rainbowButton.removeAttribute('style');
    squares.forEach(element => element.removeEventListener('mouseover', drawRainbow));
    squares.forEach(element => element.addEventListener('mouseover', draw));
    colourDiv.style.visibility = 'visible';
    return;
}

function rainbowColour(){
    erasor.removeAttribute('style');
    rainbowButton.setAttribute('style', 'background-color: black; color: white');
    normalButton.removeAttribute('style');
    colourDiv.style.visibility = 'hidden';
    squares.forEach(element => element.removeEventListener('mouseover', draw));
    squares.forEach(element => element.addEventListener('mouseover', drawRainbow));
    return;
}

function drawRainbow(){
    console.log("Draw Rainbow");
    if (rainbowIndex >= rainbowColours.length){
        console.log("Resetting rainbow colour");
        rainbowIndex = 0;
    }
    this.style.backgroundColor = rainbowColours[rainbowIndex];
    rainbowIndex++;
   
    if (rainbowIndex > rainbowColours.length){
        console.log("Resetting rainbow colour");
        rainbowIndex = 0;
    }

    return;
}

function changeColour(){
    colourChooser.forEach(element => element.removeAttribute('style'));
    this.setAttribute('style', `background-color:${this.value}; color: ${this.value}`);
    paintColour = this.value;
    console.log(`Selected paint colour of ${this.value}`)
    return;
}

function changePadSize(){
    const padSize = document.getElementById('padSize');
    if (padSize.value == 'small'){
        console.log("Small pad");
        sketchPadSize = 160;
    } 
    else if(padSize.value == 'medium'){
        console.log("Medium pad");
        sketchPadSize = 320;
    }
    else{
        console.log ('Large pad');
        sketchPadSize = 480;
    }
    container.style.width = sketchPadSize + 'px';
    container.style.height = sketchPadSize + 'px';
    squares.forEach(element => element.remove());
    createDivs(16);  
    squares = document.querySelectorAll('.square');
    squares.forEach(element => element.addEventListener('mouseover', draw));
    return;
}

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
    this.style.backgroundColor = paintColour;
    return;
}

function reset(){
    console.log('reset ran');
    colourChooser.forEach(element => element.removeAttribute('style'));
    squares.forEach(element => element.style.backgroundColor = 'white');
    return;    
}

function changeSquareSize(){
    const newSize = prompt("Number of squares per side", 16);
    if (newSize > 100 || isNaN(newSize)){
        alert("Please select a number 1 and 100");
        return;
    }
    else{
        console.log(newSize);   
        reset();
        squares.forEach(element => element.removeAttribute('background-color'));
        createDivs(newSize);
        squares = document.querySelectorAll('.square');
        squares.forEach(element => element.addEventListener('mouseover', draw));
        return;
    }
}


