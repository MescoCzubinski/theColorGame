const introText = document.querySelector('#introText');
const introContainer = document.querySelector('#introContainer');
const gameContainer = document.querySelector('#gameContainer');
const resultContainer = document.querySelector('#resultContainer');

const playButton = document.querySelector('#play');
const studyButton = document.querySelector('#study');

function showStart(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");
    resultContainer.classList.add("none");
    
    playButton.classList.remove("none");
    studyButton.classList.remove("none");

    //mechanics
    newColors();

    //style
    introContainer.style.textAlign = 'center';

    playButton.style.borderBottomRightRadius = '5px';
    studyButton.style.borderBottomRightRadius = '30px';
}

function showIntro(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");
    resultContainer.classList.add("none");
    
    playButton.classList.remove("none");
    studyButton.classList.add("none");
    
    playButton.innerHTML = "next";
    //style
    introText.style.textAlign = 'left';
    playButton.style.borderBottomRightRadius = '30px';
}

function showStudy(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");
    resultContainer.classList.add("none");

    studyButton.classList.remove("none");
    playButton.classList.add("none");

    studyButton.innerHTML = "next";

    //style
    introText.style.textAlign = 'left';
    studyButton.style.borderBottomRightRadius = '30px';
}

function showGame(){
    //display
    introText.classList.add("none");
    gameContainer.classList.remove("none");
    resultContainer.classList.add("none");

    playButton.classList.remove("none");
    studyButton.classList.add("none");

    playButton.innerHTML = "reset";
    //mechanics
        reset();

    //style
    playButton.style.borderBottomRightRadius = '30px';
}

function showResult(wasInspected){
    //display

    //mechanics

    //style
}