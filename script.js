window.addEventListener('load', function(){
    document.querySelector('#gameContainer').classList.add("none");
    newColors();
    dialog();
});

function newColors(){
    let [color, opositeColor] = colors();

    document.body.style.backgroundColor = color;
    document.querySelector("#hash").style.color = color;
    document.querySelector("#introText").style.color = opositeColor;

    document.querySelector("#testColor").style.backgroundColor = opositeColor;
    document.querySelector("#testColor").style.borderColor = opositeColor;
    document.querySelector("#upperText").style.color = opositeColor;
    document.querySelector("#bottomText").style.color = opositeColor;
    
    document.querySelector("#leftText").style.color = opositeColor;

    document.querySelector("#play").style.borderColor = opositeColor;
    document.querySelector("#play").style.backgroundColor = color;
    document.querySelector("#play").style.color = opositeColor;
    document.querySelector("#study").style.borderColor = opositeColor;
    document.querySelector("#study").style.backgroundColor = color;
    document.querySelector("#study").style.color = opositeColor;

    for(i=1; i<4; i++){
        document.querySelector("#insertColor"+i).style.backgroundColor = color;
        document.querySelector("#insertColor"+i).style.borderColor = opositeColor;
        document.querySelector("#insertColor"+i).style.color = opositeColor;
    }

    if(playClickable == true){
        document.querySelector("#play").style.backgroundColor = opositeColor;
        document.querySelector("#play").style.color = color;
    }
}

let playClickable = false;
let index = 0;
function dialog(){
    var text = [
        "The Color Game",
        "Colors! Am I right?",
        "More colors?",
        "Colors much.",
        "So... wanna play?",
        "May the colors be with you.",
        "May the colors be with you, as they're not with me.",
        "Isn't you too weak to click it?",
        "Cause only the cool guys click the button below.",
        "Oh, you can't click this button",
        "Already told you you're weak",
        "Can I help you?",
        "Here is my account number:",
        "Now you are my customer.",
        "Boss told me that I must be kind to customers.",
        "Click it. Now."
    ];

    if(index == 1){
        document.querySelector("#study").classList.add("none");
        document.querySelector("#play").style.borderBottomRightRadius = '30px';
    }
    if(index < text.length){
        document.getElementById("introText").innerHTML = text[index];

        if(text[index] == "Click it. Now."){
            playClickable = true;
        }
    }

    if(text[index-1] == "Click it. Now."){
        document.querySelector('#introContainer').classList.add("none");
        document.querySelector('#gameContainer').classList.remove("none");
        document.querySelector("#insertColor1").focus();
    }
    newColors();
    index ++;
}

function colors() {
    let color = randomColor();
    let oppositeColor = "#" + oppositeColorFunc(color);
    color = "#" + color;

    return [color, oppositeColor];
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

window.addEventListener('input', event => {
    const insertColorElements = [
        document.querySelector("#insertColor1"),
        document.querySelector("#insertColor2"),
        document.querySelector("#insertColor3")
    ];

    //var color = "#";
    for(i = 0; i < 3; i++){
        let input = insertColorElements[i].value.replace(/[^0-9a-f]/gi, "");
        insertColorElements[i].value = input;
        //color += input;

        if(input.length === 2){
            insertColorElements[i+1].focus();            
        }
    }
});

window.addEventListener('click', event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.loop = true;
});
