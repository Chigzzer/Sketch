const container = document.querySelector('#container');

function createDivs(size){
    for (let i = 0; i < (size*size); i++){
        console.log("Running");
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = (320/size) + 'px';
        div.style.height = (320/size) + 'px';
        container.appendChild(div);
    }
}

function draw(){
    console.log("Draw runned");
    this.classList.add('hovered');
}

function reset(){
    console.log('reset ran');
    divs.forEach(element => element.classList.remove('hovered'));
}

createDivs(16);
const divs = document.querySelectorAll('.square');
divs.forEach(element => element.addEventListener('mouseover', draw));

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);