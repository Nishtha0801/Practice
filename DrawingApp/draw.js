let canvas = document.querySelector("#canvas");



let points = [];

let redoPoints = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})


let ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.lineCap = 'round';

let isPenDown = false;



canvas.addEventListener("mousedown", function(e){
    isPenDown = true;
    let {top, left} = canvas.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;

    ctx.beginPath();
    ctx.moveTo(x,y);

    let point = {
        id : "md",
        x : x,
        y : y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
    }

    points.push(point);
});

canvas.addEventListener("mousemove", function(e){
    if(isPenDown){
       
        let {top, left} = canvas.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;

        ctx.lineTo(x,y);
        ctx.stroke();

        let point = {
            id: "mm",
            x : x,
            y : y,
            color: ctx.strokeStyle,
            width: ctx.lineWidth,
        }
    
        points.push(point);

    }
});

canvas.addEventListener("mouseup", function(e){
    isPenDown = false;
})


// // paintingErasing or not
// var paint = false;

// // painting or erasing
// var paint_erase = "paint";

// //get the canvas and the context
// var canvas = document.getElementById("paint");
// var ctx = canvas.getContext("2d");

// //get the canvas container
// var container = document.getElementById("container");

// // mouse position
// var mouse = {x:0, y:0};

// // set drawing parameters
// ctx.lineWidth = 3;
// ctx.lineCap = "round";
// ctx.lineJoin = "round";

// container.addEventListener("mousedown", (e) => {
//     paint = true
//     ctx.beginPath();

//     mouse.x = e.pageX - this.offsetLeft;
//     mouse.y = e.pageY - this.offsetTop;
//     if(paint ==  true){
//         if(paint_erase == "paint"){
//             console.log(document.getElementById("paintColor").value);
//             ctx.strokeStyle = document.getElementById("paintColor").value;
//         } else {
//         // white color
//         ctx.strokeStyle = "white";
//         }
//     }
//     ctx.lineTo(mouse.x, mouse.y);
//     ctx.stroke();

// });

// //mouseUp: we are neither painting nore erasing
// container.addEventListener("mouseUp", ()=>{
//     paint = false;
// })

// container.addEventListener("mouseleave", ()=>{
//     paint = false;
// })

// let circle = document.getElementById("circle");
// let slider = document.getElementById("slider");


// slider.onchange = function() {
//     console.log(this.value);
//     circle.style.height = `${this.value}px`;
//     circle.style.width = `${this.value}px`;
//     ctx.lineWidth = this.value; 
// }

// let colorInput = document.getElementById("paintColor");
// colorInput.addEventListener("input", ()=>{
//      circle.style.backgroundColor = colorInput.value;
// })








