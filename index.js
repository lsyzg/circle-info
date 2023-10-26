const pi = 3.14159;
let radius;
let circumference;

document.getElementById("myButton").onclick = function(){

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    let area = radius * radius * pi;
    let diameter = radius * 2;
    document.getElementById("p1").innerHTML = "Circumference: " + circumference;
    document.getElementById("p2").innerHTML = "Area: " + area;
    const circleElement = document.getElementById('dynamicCircle');

    circleElement.style.width = 10 * diameter + 'px';
    circleElement.style.height = 10 * diameter + 'px';
    circleElement.style.backgroundColor = 'red';
    circleElement.style.border = '2px solid black';
}