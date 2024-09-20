function main(){
    document.body.style.backgroundColor = radnomColor();
}
window.addEventListener('click', main)
window.addEventListener('load', main)

function radnomColor(){
    let color = ""
    for(i=0; i<3; i++){
        var number = Math.random() * (255-0) + 1
        number = (Math.round(number)).toString(16);
        color += number;
    }
    return "#" + color;
}

window.addEventListener('click', function() {
    let insertColorElement = document.getElementById("insertColor").value;
    
    document.getElementById("insertColor").value = "#" + insertColorElement;
});
