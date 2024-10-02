const body = document.querySelector('body');

const introText = document.querySelector('#introText');
const introContainer = document.querySelector('#introContainer');
const gameContainer = document.querySelector('#gameContainer');

const playButton = document.querySelector('#play');
const studyButton = document.querySelector('#study');

const audio = document.querySelector("#audio");
const thePunishment = document.querySelector("#thePunishment");

const hash = document.querySelector('#hash');

const insertColorElements = [
    document.querySelector("#insertColor1"),
    document.querySelector("#insertColor2"),
    document.querySelector("#insertColor3")
];

function showStart(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");
    
    playButton.classList.remove("none");
    studyButton.classList.remove("none");

    playButton.innerHTML = "play";
    studyButton.innerHTML = "study";

    //mechanics
    newColors();

    //style
    introContainer.style.textAlign = 'center';
    introText.style.fontSize = '100px'

    playButton.style.borderBottomRightRadius = '5px';
    studyButton.style.borderBottomRightRadius = '30px';
}

function showIntro(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");
    
    playButton.classList.remove("none");
    studyButton.classList.add("none");
    
    playButton.innerHTML = "next";

    //style
    introText.style.fontSize = '50px'
    introText.style.textAlign = 'left';
    playButton.style.borderBottomRightRadius = '30px';
}

function showStudy(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");

    playButton.classList.add("none");
    studyButton.classList.remove("none");

    studyButton.innerHTML = "next";

    //style
    introText.style.fontSize = '50px'
    introText.style.textAlign = 'left';
    studyButton.style.borderBottomRightRadius = '30px';
}

function showGame(){
    //display
    introText.classList.add("none");
    gameContainer.classList.remove("none");

    playButton.classList.remove("none");
    studyButton.classList.add("none");

    playButton.innerHTML = "reset";
    
    //mechanics
    reset();

    //style
    playButton.style.borderBottomRightRadius = '30px';
}

function showResult(){
    //display
    introText.classList.remove("none");
    gameContainer.classList.add("none");

    playButton.classList.add("none");
    studyButton.classList.add("none");

    //style
    introText.style.fontSize = '50px'
}