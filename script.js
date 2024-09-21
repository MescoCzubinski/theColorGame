function main(){
    let [color, opositeColor] = radnomColor();

    document.body.style.backgroundColor = color;
    document.getElementById("hash").style.color = color;
    document.getElementById("testColor").style.backgroundColor = opositeColor;
    document.getElementById("testColor").style.borderColor = opositeColor;
    document.getElementById("upperText").style.color = opositeColor;
    document.getElementById("bottomText").style.color = opositeColor;
    document.getElementById("leftText").style.color = opositeColor;

    for(i=1; i<4; i++){
        document.getElementById("insertColor"+i).style.backgroundColor = color;
        document.getElementById("insertColor"+i).style.borderColor = opositeColor;

    }
}
window.addEventListener('load', main);

function radnomColor(){
    let color = "#";
    let opositeColor = "#";

    for(i=0; i<3; i++){
        var number = Math.round(Math.random() * 255);
        var opositeNumber = (255 - Number(number));

        number = number.toString(16).padStart(2, '0');
        opositeNumber = opositeNumber.toString(16).padStart(2, '0');

        color += number;
        opositeColor += opositeNumber;
    }
    return [color, opositeColor];
}

window.addEventListener('click', inputing);
function inputing(){
    const insertColorElements = [
        document.getElementById("insertColor1"),
        document.getElementById("insertColor2"),
        document.getElementById("insertColor3")
    ];

    var color = "#";
    for(let i = 0; i < 3; i++){
        let input = insertColorElements[i].value.replace(/[^0-9a-f]/gi, "");
        color += input;
        if(input.length === 2){
            insertColorElements[i+1].value.blur();
        }
    }

    if(color.length === 7){
        document.getElementById("testColor").style.backgroundColor = color;
        document.getElementById("hash").style.color = document.getElementById("testColor").style.borderColor;
    }
    
}

window.addEventListener('click', event => {
    const audio = document.querySelector("audio");
    audio.play();
    audio.loop = true;
});
