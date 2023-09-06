let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = document.querySelector("#pencil-options");

let activeTool = "pencil";

pencil.addEventListener("click", function(){
    activeTool = "pencil";

    if(pencil.classList.contains("active-tool")){
        if(pencilOptions.classList.contains("tool-options-active")){
            pencilOptions.classList.remove("tool-options-active");
        }
        else {
            pencilOptions.classList.add("tool-options-active");
        }

    } else {
        
    }
})