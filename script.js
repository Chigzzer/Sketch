// Setting constants for html queries
const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const sizeSquare = document.querySelector('.drawSize');
const padButton = document.querySelector('#padChange');
const colorChooser = document.querySelectorAll('.colorButton');
const normalButton = document.querySelector('#normal');
const rainbowButton = document.querySelector('#rainbow');
const opacityButton = document.querySelector('#opacity');
const erasor = document.querySelector('#erasor');
const colorDiv = document.querySelector('#colors');
const erasorText = document.querySelector('#erasorText');
const sizeRanger = document.querySelector('#squareRange'); 
const opacityDiv = document.querySelector('#opacityDiv');
const opacityRange = document.querySelector('#opacityRange');
const title = document.querySelector('.title');

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let paintColor = 'black';
let rainbowIndex = 0;
let sketchPadSize = 440;

// Automatically sizing the container
container.style.width = sketchPadSize + 'px';
container.style.height = sketchPadSize + 'px';

// Creating the initial event listeners for the buttons
resetButton.addEventListener('click', reset);
sizeSquare.addEventListener('click', changeSquareSize);
padButton.addEventListener('click', changePadSize);
normalButton.addEventListener('click', normalColor);
rainbowButton.addEventListener('click', rainbowColor);
opacityButton.addEventListener('click', opacityColor);
erasor.addEventListener('click', erase);
sizeRanger.addEventListener('click', changeRange);
opacityRange.addEventListener('click', changeOpacityRange);
colorChooser.forEach(element => element.addEventListener('click', changeColor));
let squares;

start();

// Functions for each part
// Creating the initial divisions
function start(){ 
    createDivs(16);
    squares = document.querySelectorAll('.square');
    normalColor();
}

// Function that fills the the selected square with the chosen color onto the grid
function normalColor(){
    erasor.removeAttribute('style');
    opacityButton.removeAttribute('style');
    normalButton.setAttribute('style', 'background-color: black; color: white');
    rainbowButton.removeAttribute('style');
    erasorText.style.visibility = 'hidden';
    colorDiv.style.visibility = 'visible';
    opacityDiv.style.visibility = 'visible';
    black.click();

    squares.forEach(element => element.removeEventListener('mouseover', drawRainbow));
    squares.forEach(element => element.removeEventListener('mouseover', opacityDraw));
    squares.forEach(element => element.removeEventListener('click', eraseSquare));
    squares.forEach(element => element.addEventListener('mouseover', draw));
    return;
}

function draw(){
    console.log("Drawing");
    this.style.opacity = opacityRange.value;
    this.style.backgroundColor = paintColor;
    return;
}

// Rainbow mode, where each color square alters with the color of the rainbow
function rainbowColor(){
    erasor.removeAttribute('style');
    opacityButton.removeAttribute('style');
    rainbowButton.setAttribute('style', 'background-color: black; color: white');
    normalButton.removeAttribute('style');
    colorDiv.style.visibility = 'hidden';
    erasorText.style.visibility = 'hidden';
    opacityDiv.style.visibility = 'visible';

    squares.forEach(element => element.removeEventListener('mouseover', draw));
    squares.forEach(element => element.removeEventListener('mouseover', opacityDraw));
    squares.forEach(element => element.removeEventListener('click', eraseSquare));
    squares.forEach(element => element.addEventListener('mouseover', drawRainbow));
    return;
}

function drawRainbow(){
    console.log("Draw Rainbow");
    if (rainbowIndex >= rainbowColors.length){
        console.log("Resetting rainbow color");
        rainbowIndex = 0;
    }
    this.style.opacity = opacityRange.value;
    this.style.backgroundColor = rainbowColors[rainbowIndex];
    rainbowIndex++;
    return;
}

// Code for the opacity mode, where each mouseover darkens the square by 10%
function opacityColor(){
    console.log("Running opacity mode");
    rainbowButton.removeAttribute('style');
    opacityButton.setAttribute('style', 'background-color: black; color: white');
    normalButton.removeAttribute('style');
    erasor.removeAttribute('style');
    colorDiv.style.visibility = 'visible';
    opacityDiv.style.visibility = 'hidden';
    let black = document.querySelector('#black');
    black.click();

    squares.forEach(element => element.removeEventListener('mouseover', draw));
    squares.forEach(element => element.removeEventListener('mouseover',drawRainbow));
    squares.forEach(element => element.removeEventListener('click',erase));
    squares.forEach(element => element.addEventListener('mouseover',opacityDraw));
}

function opacityDraw(){
    if (this.style.opacity == 1){
        this.style.opacity = 0;
    }
        this.style.opacity = +this.style.opacity + 0.1;
    this.style.backgroundColor = paintColor;
}

// Function for the erase section. Click on each square to erase the color from it.
function erase(){
    rainbowButton.removeAttribute('style');
    erasor.setAttribute('style', 'background-color: black; color: white');
    normalButton.removeAttribute('style');
    erasorText.style.visibility = 'visible';
    squares.forEach(element => element.removeEventListener('mouseover', drawRainbow));
    squares.forEach(element => element.removeEventListener('mouseover', draw));
    squares.forEach(element => element.removeEventListener('mouseover', opacityDraw));
    squares.forEach(element => element.addEventListener('click', eraseSquare));
}

function eraseSquare(){
    this.style.backgroundColor = 'white';
}


function changeOpacityRange(){
    let newOpacityRange = opacityRange.value;
    console.log(newOpacityRange);
    document.getElementById('opacityLevel').innerText = `Opacity: ${newOpacityRange}`;
}

// Code to read the range slider, opacity sliderand change pad size
function changeRange(){
    let newSizeRange = sizeRanger.value;
    let val = '';
    if (newSizeRange == 0){
         val = 10;
    }
    else if (newSizeRange == 1){
        val = 12;
    }
    else if (newSizeRange == 2){
        val = 16;
    }
    else if (newSizeRange == 3){
        val = 20;
    }
    else if (newSizeRange == 4){
        val = 22;
    }
    else if (newSizeRange == 5){
        val = 24;
    }
    document.getElementById('gridSize').innerText = `${val} by ${val}`;
}

function changePadSize(){
    const padSize = document.getElementById('padSize');
    let fontSize;
    if (padSize.value == 'small'){
        console.log("Small pad");
        sketchPadSize = 300;
        fontSize = 30;
    } 
    else if(padSize.value == 'medium'){
        console.log("Medium pad");
        sketchPadSize = 440;
        fontSize = 40;
    }
    else{
        console.log ('Large pad');
        sketchPadSize = 580;
        fontSize = 50;
    }
    container.style.width = sketchPadSize + 'px';
    container.style.height = sketchPadSize + 'px';
    colorDiv.style.width = sketchPadSize + 'px';
    opacityDiv.style.width = sketchPadSize + 'px';
    title.style.width = sketchPadSize + 'px';
    title.style.fontSize = fontSize + 'px';
    squares.forEach(element => element.remove());
    createDivs(16);  
    squares = document.querySelectorAll('.square');
    squares.forEach(element => element.addEventListener('mouseover', draw));
    return;
}

// Choosing the color to draw on the pad
function changeColor(){
    colorChooser.forEach(element => element.removeAttribute('style'));
    this.setAttribute('style', `background-color:${this.value}; color: ${this.value}`);
    paintColor = this.value;
    console.log(`Selected paint color of ${this.value}`)
    return;
}

// Function that creates the squares in the container and allows dynamic changing of the number of squares
function createDivs(size){
    const border = 1;
    for (let i = 0; i < (size*size); i++){
        console.log(`Running ${size}`);
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = ((sketchPadSize/size) - (2 * border)) + 'px';
        div.style.height = ((sketchPadSize/size) - (2 * border)) + 'px';
        div.style.border = border + 'px black solid';
        container.appendChild(div);
    }
    return;
}

// Reads either the inputted value or value from the slider and produces the grid based on the user input. 
function changeSquareSize(){
    let newSize = 16;
    let newSizeRange = sizeRanger.value;
    console.log(`value: ${newSizeRange}`)
    if (document.querySelector('#newSizeText').value ==''){
        console.log('running range');
        if (newSizeRange == 0){
            newSize = 10;
        }
        else if (newSizeRange == 1){
            newSize = 12;
        }
        else if (newSizeRange == 2){
            newSize = 16;
        }
        else if (newSizeRange == 3){
            newSize = 20;
        }
        else if (newSizeRange == 4){
            newSize = 22;
        }
        else if (newSizeRange == 5){
            newSize = 24;
        }
    }
    else{
        console.log('running text');
        newSize = parseInt(document.querySelector('#newSizeText').value);
    }

    console.log(newSize);
    if (newSize > 100 || isNaN(newSize)){
        alert("Please select a number 1 and 100");
        return;
    }
    else{
        console.log(newSize);   
        reset();
        container.innerHTML='';
        createDivs(newSize);
        squares = document.querySelectorAll('.square');
        squares.forEach(element => element.addEventListener('mouseover', draw));
        document.querySelector('#newSizeText').value = '';
        return;
    }
}

// Function that clears out all the current drawn items in the container
function reset(){
    console.log('reset ran');
    colorChooser.forEach(element => element.removeAttribute('style'));
    squares.forEach(element => element.style.backgroundColor = 'white');
    container.innerHTML='';
    createDivs(16);
    squares = document.querySelectorAll('.square');
    // squares.forEach(element => element.addEventListener('mouseover', draw));
    return normalColor(); 
}




