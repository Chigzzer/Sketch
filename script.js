const container = document.querySelector('#container');
let paintColour = 'black';
let rainbowIndex = 0;
// Section that automatically sizes the sketch pad.
let sketchPadSize = 320;
container.style.width = sketchPadSize + 'px';
container.style.height = sketchPadSize + 'px';

createDivs(16);
let squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('.reset');
const sizeSquare = document.querySelector('.drawSize');
const padButton = document.querySelector('#padChange');
const colourChooser = document.querySelectorAll('.colourButton');
const normalButton = document.querySelector('.normal');
const rainbowButton = document.querySelector('.rainbow');
const colourDiv = document.querySelector('#colours');
console.log(squares);
squares.forEach(element => element.addEventListener('mouseover', draw));
resetButton.addEventListener('click', reset);
sizeSquare.addEventListener('click', changeSquareSize);
colourChooser.forEach(element => element.addEventListener('click', changeColour));
padButton.addEventListener('click', changePadSize);
normalButton.addEventListener('click', normalColour);
rainbowButton.addEventListener('click', rainbowColour);

function normalColour(){
    reset();
    squares.forEach(element => element.addEventListener('mouseover', draw));
    squares.forEach(element => element.removeEventListener('mouseover', drawRainbow));
    paintColour = 'black';
    colourDiv.style.visibility = 'visible';
    return;
}

function rainbowColour(){
    reset();
    colourDiv.style.visibility = 'hidden';
    squares.forEach(element => element.addEventListener('mouseover', drawRainbow));
    return;
}

function drawRainbow(){
    const rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (rainbowIndex > rainbowColours.length){
        rainbowIndex = 0;
    }
    console.log("Draw Rainbow");
    this.style.backgroundColor = rainbowColours[rainbowIndex];
    rainbowIndex++;
    return;
}

function changeColour(){
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
        squares.forEach(element => element.remove());
        createDivs(newSize);
        squares = document.querySelectorAll('.square');
        squares.forEach(element => element.addEventListener('mouseover', draw));
        return;
    }
}


