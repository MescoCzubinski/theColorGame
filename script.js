let backgroundColor;
window.addEventListener('load', function(){
    showStart();
});

window.addEventListener('input', event => {
    const insertColorElements = [
        document.querySelector("#insertColor1"),
        document.querySelector("#insertColor2"),
        document.querySelector("#insertColor3")
    ];

    var color = "#";
    for(i = 0; i < 3; i++){
        let input = insertColorElements[i].value.replace(/[^0-9a-f]/gi, "");
        insertColorElements[i].value = input;
        color += input;

        if(input.length === 2 && i+1 < 3){
            insertColorElements[i+1].focus();            
        }
    }
    checking(color);
});
function reset(){
    ['#insertColor1', '#insertColor2', '#insertColor3'].forEach(id => {
        document.querySelector(id).value = "";
    });
    document.querySelector("#insertColor1").focus();
}

let wasInspected = false;
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        wasInspected = true;
    }
});
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;
window.addEventListener('resize', () => {
    if (window.innerWidth !== previousWidth || window.innerHeight !== previousHeight) {
        wasInspected = true;
    }
});
function checking(color){
    console.log(backgroundColor);

    if(color == backgroundColor){

        newColors();
        showResult(wasInspected);
    }
}

let playClickable = false;
let introIndex = 0;
let introRead = false;
document.querySelector('#play').addEventListener('click', function(){

    showIntro();

    const introDialog = [
        "As I guess you like colors.",
        "Am I right?",
        "More colors?",
        "So... wanna play?",
        "But why doesn't this button work?",
        "Isn't you too weak to click it?",
        "Ok... ok... I'll stop now.",
        "\"May the colors be with you...\"",
        "",
        "Oh, you still can't click this button?",
        "Already told you you're too weak?",
        "Last chance.",
        "Click it. Now."
    ];

    if(introIndex === introDialog.length - 2) {
        playClickable = true; //TYMCZASOWO!!!!!!!
    }
    
    if(introIndex < introDialog.length) {
        textTyping(introText, introDialog[introIndex]);
        newColors();
        introIndex++;
    }
    
    if(introIndex === introDialog.length) {
        showGame();
        introRead = true;
    }

    if(introIndex > introDialog.length){
        reset();
    }
});

let studyIndex = 0;
let studyRead = false;
document.querySelector('#study').addEventListener('click', function(){

    showStudy();

    const studyDialog = [
        "So, hex colors. Yeah, they're these six-character things. Numbers and letters, starting with a '#'. Super exciting, right?",
        "Basically, it's red, green, and blue squished into some code. Millions of color combos or whatever. It's useful, I guess.",
        "The numbers go from '00' to 'FF'. That means from no color to full color. That's all there is to it. Wild.",
        "People like using hex in web design because, I don’t know, it just works across devices. Same color, no surprises. Yay.",
        "It’s in design tools too, next to other color formats. Makes converting easier or whatever. If you care about that stuff.",
        "Anyway, that’s hex colors. You use them, they work, end of story. Not exactly thrilling, but there you have it."
    ];
    
    if (studyIndex < studyDialog.length) {
        textTyping(document.querySelector('#introText'), studyDialog[studyIndex]);
        newColors();
        studyIndex++;
    }
    
    if (studyIndex === studyDialog.length) {
        showGame();
        introIndex = 13; //TYMCZASOWO !!!!!!!!!!!!
        studyRead = true;  
    }
    playClickable = true;
});


function colors() {
    let color = randomColor();
    let oppositeColor = oppositeColorFunc(color);
    
    while (!isHighContrast(color, oppositeColor)) {
        color = randomColor();
        oppositeColor = oppositeColorFunc(color);
    }
    
    return ["#" + color,"#" +  oppositeColor];
}
function randomColor() {
    let color = "";
    
    for (let i = 0; i < 3; i++) {
        let number = Math.round(Math.random() * 255);
        number = number.toString(16).padStart(2, '0');
        color += number;
    }
    return color;
}
function oppositeColorFunc(color) {
    let oppositeColor = "";
    
    for (let i = 0; i < 3; i++) {
        let hexNumber = color.slice(i * 2, (i * 2) + 2);
        let number = 255 - parseInt(hexNumber, 16);
        
        oppositeColor += number.toString(16).padStart(2, '0');
    }
    return oppositeColor;
}
//chatGPT-4o functions
function isHighContrast(color1, color2) {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    
    return contrastRatio >= 4.5;
}
function getLuminance(hexColor) {
    const rgb = hexColor.match(/.{1,2}/g).map(hex => parseInt(hex, 16) / 255);
    const [r, g, b] = rgb.map(channel => {
        return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
//////////////////////
function newColors(){
    let [color, opositeColor] = colors();

    document.body.style.backgroundColor = color;
    document.querySelector("#hash").style.color = color;

    document.querySelector("#introText").style.color = opositeColor;
    document.querySelector("#leftText").style.color = opositeColor;
    document.querySelector("#upperText").style.color = opositeColor;
    document.querySelector("#bottomText").style.color = opositeColor;

    document.querySelector("#testColor").style.backgroundColor = opositeColor;
    document.querySelector("#testColor").style.borderColor = opositeColor;

    document.querySelector("#play").style.borderColor = opositeColor;
    document.querySelector("#play").style.color = opositeColor;
    document.querySelector("#play").style.shadowColor = opositeColor;

    document.querySelector("#study").style.borderColor = opositeColor;
    document.querySelector("#study").style.color = opositeColor;
    document.querySelector("#study").style.shadowColor = opositeColor;

    for(i=1; i<4; i++){
        document.querySelector("#insertColor"+i).style.backgroundColor = color;
        document.querySelector("#insertColor"+i).style.borderColor = opositeColor;
        document.querySelector("#insertColor"+i).style.color = opositeColor;
    }

    if(playClickable == true){
        document.querySelector("#play").style.color = color;
        document.querySelector("#play").style.backgroundColor = opositeColor;
    }

    backgroundColor = color;
}
function textTyping(element, text, i = 0){
    if(text === ""){
        element.textContent = "";
        return;
    }

    const words = text.split(" ");

    if (i === 0){
        element.textContent = "";
    }

    element.textContent += (i === 0 ? "" : " ") + words[i];

    if(i === words.length - 1){
        return;
    }

    setTimeout(() => textTyping(element, text, i+1), 400); 
}

window.addEventListener('click', event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.loop = true;
});