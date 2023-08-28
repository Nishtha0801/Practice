// paintingErasing or not
var paint = false;

// painting or erasing
var paint_erase = "paint";

//get the canvas and the context
var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");

//get the canvas container
var container = document.getElementById("container");

// mouse position
var mouse = {x:0, y:0};

// set drawing parameters
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "round";

container.addEventListener("mousedown", (e) => {
    paint = true
    ctx.beginPath();

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    if(paint ==  true){
        if(paint_erase == "paint"){
            console.log(document.getElementById("paintColor").value);
            ctx.strokeStyle = document.getElementById("paintColor").value;
        } else {
        // white color
        ctx.strokeStyle = "white";
        }
    }
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();

});

//mouseUp: we are neither painting nore erasing
container.addEventListener("mouseUp", ()=>{
    paint = false;
})

container.addEventListener("mouseleave", ()=>{
    paint = false;
})

let circle = document.getElementById("circle");
let slider = document.getElementById("slider");


slider.onchange = function() {
    console.log(this.value);
    circle.style.height = `${this.value}px`;
    circle.style.width = `${this.value}px`;
    ctx.lineWidth = this.value; 
}

let colorInput = document.getElementById("paintColor");
colorInput.addEventListener("input", ()=>{
     circle.style.backgroundColor = colorInput.value;
})






