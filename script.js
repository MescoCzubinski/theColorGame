window.addEventListener('load', function(){
    document.querySelector('#gameContainer').classList.add("none");
    newColors();
    dialog();
});

window.addEventListener('click', event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.loop = true;
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
function dialog(){
    document.querySelector("#introText").innerHTML = "Colors! Am I right?";

    var text = [
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

    for(let index = 0; index < text.length; index++) {
        setTimeout(function(){
            document.querySelector("#introText").innerHTML = text[index];
            newColors();

            if(text[index] == "Now you are my customer."){
                playClickable = true;
            }
        }, 500 * (index + 1));
    }
};

const button = document.getElementById("play"); // Replace with your button's ID

button.addEventListener("click", function(){
    if(playClickable == true){
        document.querySelector('#gameContainer').classList.remove("none");
        document.querySelector('#introContainer').classList.add("none");
    }
});

function colors(){
    let color = "#" + radnomColor();
    let opositeColor = "#" + opositeColor(color);

    return [color, opositeColor];
}
function radnomColor(){
    let color = "";

    for(i=0; i<3; i++){
        var number = Math.round(Math.random() * 255);
        number = number.toString(16).padStart(2, '0');
        color += number;
    }
    return color;
}
function oppositeColor(color) {
    let oppositeColor = "";

    for (let i = 0; i < 3; i++) {
        let hexNumber = color.slice((i * 2) + 1, (i + 1) * 2 + 1);
        let number = parseInt(hexNumber, 16);
        number = 255 - number;
        oppositeColor += number.toString(16).padStart(2, '0');
    }
    return oppositeColor;
}


window.addEventListener('input', inputing);
function inputing(){
    const insertColorElements = [
        document.querySelector("#insertColor1"),
        document.querySelector("#insertColor2"),
        document.querySelector("#insertColor3")
    ];

    var color = "#";
    for(i = 0; i < 3; i++){
        let input = insertColorElements[i].value.replace(/[^0-9a-f]/gi, "");
        color += input;
    }

    for(i=2; i<4; i++){
        if(insertColorElements[i-2].value.length === 2){
            document.querySelector("#insertColor"+i).focus();

            if(i == 3 && insertColorElements[i-1].value.length === 2){
                document.querySelector("#testColor").style.backgroundColor = color;
                document.querySelector("#hash").style.color = document.querySelector("#testColor").style.borderColor;
            }
        }
    }
}

