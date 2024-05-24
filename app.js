let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let div = document.querySelector('div');

btn.addEventListener("click", function (){
    console.log("btn clicked");
    let color = getRandomColor();
    h1.style.color = color;
    h1.innerText =  color;
    div.style.backgroundColor = color;

});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}


