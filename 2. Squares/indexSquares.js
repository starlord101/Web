const myCanvas = document.getElementById("c1");
const ctx = myCanvas.getContext('2d');

mySquares();

const btn = document.querySelector("button");
btn.addEventListener("click",()=>{mySquares()});

function mySquares(){
    for(let i = 0; i < 8; i++)
        for(let j = 0; j < 4; j++){
        let x = 50*i;
        let y = 50*j;
    ctx.fillRect(x,y,50,50);
    ctx.fillStyle = 'rgb('+
    Math.floor(Math.random()*255)+','+
    Math.floor(Math.random()*255)+','+
    Math.floor(Math.random()*255)+')';
    ctx.strokeRect(x,y,50,50);
    ctx.strokeStyle = 'black';
    }
}

