let imgUpload = document.querySelector("#img-upload");
let download = document.querySelector("#download");

imgUpload.addEventListener("change", function(){
    let file = imgUpload.files[0];

    if(file){
        let img = document.createElement("img");
        let url = URL.createObjectURL(file);
        img.src = url;
        img.setAttribute("class", "sticky-img");
        let stickyContent = createSticky();
        stickyContent.appendChild(img);
    }

});