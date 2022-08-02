const p1 =  document.querySelector('p');
const inputOne = document.querySelector('.input1');
const inputTwo = document.querySelector('.input2');
const inputThree = document.querySelector('.input3');
const inputFour =  document.querySelector('.input4');
const inputFive =  document.querySelector('.input5');
const body1 = document.querySelector('body');


function changeColor(event){
    p1.style.color = event.target.value;
    localStorage.setItem("Color", event.target.value)
}


function changeFontSize (event){
    p1.style.fontSize = event.target.value
    localStorage.setItem("fontSize", event.target.value)
}

function changeFontStyle(event){
    p1.style.fontStyle = event.target.value;
    localStorage.setItem("FontStyle", event.target.value)
}

function lineHeight (event){
    p1.style.lineHeight = event.target.value;
    localStorage.setItem("lineHeight", event.target.value)
}

function changeBackground (event){
    body1.style.backgroundColor = event.target.value;
    localStorage.setItem("backgroundColor", event.target.value)
    
}

inputOne.addEventListener('input', changeColor);
inputTwo.addEventListener('input', changeFontSize);
inputThree.addEventListener('input', changeFontStyle);
inputFour.addEventListener('input', lineHeight);
inputFive.addEventListener('input',changeBackground);

