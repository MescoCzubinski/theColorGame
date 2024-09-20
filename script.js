function main(){
    const color = radnomColor();
    document.body.style.backgroundColor = "#" + color;

    color = parseFloat(color) - 100000;
    document.getElementById("hash").style.color = "#" + color;
}
window.addEventListener('click', main)
window.addEventListener('load', main)

function radnomColor(){
    let color = ""
    for(i=0; i<3; i++){
        var number = Math.random() * (235-20) + 1
        number = (Math.round(number)).toString(16);
        color += number;
    }
    return color;
}

window.addEventListener('click', inputing)
function inputing(){
    const insertColor1Element = document.getElementById("insertColor1");
    const insertColor2Element = document.getElementById("insertColor2");
    const insertColor3Element = document.getElementById("insertColor3");

    for(i=0; i<3; i++){

    }
}
