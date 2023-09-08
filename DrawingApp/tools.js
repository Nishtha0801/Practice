let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

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
})