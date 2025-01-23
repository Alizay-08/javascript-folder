function  zoomIn(){
    var img = document.getElementById("images");
    var currWidth = img.clientWidth;
    if (currWidth < 500){
        img.style.width = (currWidth + 50)+ "px";
    }else{
        alert("Maximum zoom level reached");
    }
}

function zoomOut(){
    var img = document.getElementById("images");
    var currWidth = img.clientWidth;
    if(currWidth > 50){
        img.style.width = (currWidth - 50)+ "px";
    }else{
        alert("Minimum zoom level reached");
    }
}