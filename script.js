window.addEventListener('load', function(){
    document.querySelector('#gameContainer').classList.add("none");
    newColors();
    dialog();
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

        if(input.length === 2){
            insertColorElements[i+1].focus();            
        }
    }
    
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
        "As I guess you like... colors.",
        "Am I right?",
        "More colors?",
        "So... wanna play?",
        "But why doesn't this button work?",
        "Isn't you too weak to click it?",
        "Ok... ok... I'll stop now.",
        "May the colors be with you.",
        "",
        "Oh, you still can't click this button?",
        "Already told you you're too weak?",
        "Last chance.",
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

let studyIndex = 0;
function study(){
    document.querySelector('#play').classList.add("none");
    document.querySelector('#introContainer').style.width = "800px";
    document.querySelector('#introText').style.height = "500px";

    var hexColor = [
        "So, hex colors. Yeah, they're these six-character things. Numbers and letters, starting with a #. Super exciting, right?",
        "Basically, it's red, green, and blue squished into some code. Millions of color combos or whatever. It's useful, I guess.",
        "The numbers go from 00 to FF. That means from no color to full color. That's all there is to it. Wild.",
        "People like using hex in web design because, I don’t know, it just works across devices. Same color, no surprises. Yay.",
        "It’s in design tools too, next to other color formats. Makes converting easier or whatever. If you care about that stuff.",
        "Anyway, that’s hex colors. You use them, they work, end of story. Not exactly thrilling, but there you have it."
      ];

      if(studyIndex < hexColor.length){
        document.querySelector("#introText").innerHTML = hexColor[studyIndex];
        document.querySelector("#study").innerHTML = "next";
      }
      newColors();
      studyIndex++;

      if(studyIndex >   hexColor.length){
        document.querySelector('#play').classList.remove("none");
        document.querySelector('#introContainer').style.width = "530px";
        document.querySelector('#introText').style.height = "350px";

        document.querySelector("#introText").innerHTML = "The Color Game";
        document.querySelector("#study").innerHTML = "study";
        studyIndex = 0;
      }
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

window.addEventListener('click', event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.loop = true;
});
