let sticky = document.querySelector("#sticky");

sticky.addEventListener("click", function(){
    let textArea = document.createElement("textarea");

    textArea.setAttribute("rows", "10");
    textArea.setAttribute("cols", "30");

    let stickyContent = createSticky();
    stickyContent.appendChild(textArea);

  

});


function createSticky(){
    let sticky = document.createElement("div");
    let stickyHeader = document.createElement("div");
    let minimize = document.createElement("div");
    let close = document.createElement("div");

    let stickyContent = document.createElement("div");


    sticky.setAttribute("class", "sticky");
    stickyHeader.setAttribute("class", "sticky-header");
     minimize.setAttribute("class", "minimize");
     close.setAttribute("class", "close");
     stickyContent.setAttribute("class", "sticky-content");

     stickyHeader.appendChild(minimize);
     stickyHeader.appendChild(close);

     sticky.appendChild(stickyHeader);
     sticky.appendChild(stickyContent);

     document.body.appendChild(sticky);

     return stickyContent;


    
}

