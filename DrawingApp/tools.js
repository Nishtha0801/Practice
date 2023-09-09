let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

let black = document.querySelector(".black");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");


let pencilSlider = document.querySelector("#pencil-slider");
let eraserSlider = document.querySelector("#eraser-slider");


let activeTool = "pencil";
let pencilWidth = ctx.lineWidth;
let eraserWidth = ctx.lineWidth;

pencil.addEventListener("click", function(){
    console.log("Pencil clicked!")
    activeTool = "pencil";

    if(pencil.classList.contains("active-tool")){
        console.log("It contains active-tool class");
        if(pencilOptions.classList.contains("tool-options-active")){
            console.log("Tools option are already active");
            pencilOptions.classList.remove("tool-options-active");
        }
        else {
            console.log("Activate the tool options!")
            pencilOptions.classList.add("tool-options-active");
        }

    } else {
        console.log("It does not active-tool class");
        eraser.classList.remove("active-tool");
        eraserOptions.classList.remove("tool-options-active");
        pencil.classList.add("active-tool");
        ctx.strokeStyle = "black";
        ctx.lineWidth = pencilWidth;
        
    }
});

eraser.addEventListener("click", function(){
    activeTool = "eraser";
    if(eraser.classList.contains("active-tool")){
        if(eraserOptions.classList.contains("tool-options-active")){
            eraserOptions.classList.remove("tool-options-active");
        } else {
            eraserOptions.classList.add("tool-options-active");
        }
    } else {
        pencil.classList.remove("active-tool");
        pencilOptions.classList.remove("tool-options-active");
        eraser.classList.add("active-tool");
        ctx.strokeStyle = "white";
        ctx.lineWidth = eraserWidth;
    }
});

black.addEventListener("click", function(){
    ctx.strokeStyle = "black";
});

blue.addEventListener("click", function(){
    ctx.strokeStyle = "blue";
});

yellow.addEventListener("click", function(){
    ctx.strokeStyle = "yellow";
});

red.addEventListener("click", function(){
    ctx.strokeStyle = "red";
});

pencilSlider.addEventListener("change", function(){
    pencilWidth = pencilSlider.value;
    ctx.lineWidth = pencilWidth;
})

eraserSlider.addEventListener("change", function(){
    eraserWidth = eraserSlider.value;
    ctx.lineWidth = eraserWidth;
})