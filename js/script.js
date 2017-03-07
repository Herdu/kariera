/**
 * Created by mateu on 14.11.2016.
 */

var dlugosc_slajdu = 6000;

var slajder = document.getElementsByClassName("slajder");
var currentSlajder = 0;

var displaySlajder = function(){
    slajder[currentSlajder].className += " fadeOut";
  currentSlajder = (currentSlajder+1)%slajder.length;


    for (var i=0; i<slajder.length; i++)
    {
        if (i!=currentSlajder)
        {
            slajder[i].removeClass("fadeIn");
            slajder[i].style.display = "none";
            slajder[i].className += " fadeOut";
        }

    }
    slajder[currentSlajder].removeClass("fadeOut");
    slajder[currentSlajder].style.display = "block";
    slajder[currentSlajder].className+=" fadeIn";
    setTimeout(function(){
        slajder[currentSlajder].className+=" fadeOut";
    }, dlugosc_slajdu - 1000);



};






HTMLElement.prototype.removeClass = function(remove) {
    var newClassName = "";
    var i;
    var classes = this.className.split(" ");
    for(i = 0; i < classes.length; i++) {
        if(classes[i] !== remove) {
            newClassName += classes[i] + " ";
        }
    }
    this.className = newClassName;
}





displaySlajder();
setInterval(displaySlajder,dlugosc_slajdu);



var currentMap;
var oldMap;



var tempChangeMap = function(){
    console.log("yolo");
    oldMap = currentMap;
    currentMap = this.mapId;
    changeMap();
}


var tempChangeMapOff = function(){
    currentMap = oldMap;
    changeMap();
}

var permChangeMap = function(){
    currentMap = this.mapId;
    oldMap = this.mapId;
    changeMap();
}



var changeMap =  function(){



    $('#map-poznan').css("display","none");
    $('#map-poland').css("display","none");
    $('#map-europe').css("display","none");
    console.log("current map = ",currentMap);
    switch(currentMap){
        case 1:



            $('#map-poznan').css("display","block");

            $('#map-description').html("Nasz zasięg wczoraj");
            break;
        case 2:
            $('#map-poland').css("display","block");

            $('#map-description').html("Nasz zasięg dziś");
            break;
        case 3:
            $('#map-europe').css("display","block");

            $('#map-description').html("Nasz zasięg jutro");
            break;
    }
};


$(document).ready(function(){
    document.getElementById("wczoraj-button").mapId = 1;
    document.getElementById("dzis-button").mapId = 2;
    document.getElementById("jutro-button").mapId = 3;

    $('.map-button').on("click",permChangeMap);


    $('.map-button').on("mouseover",tempChangeMap);
    $('.map-button').on("mouseleave",tempChangeMapOff);

    currentMap = 2;
    changeMap();
});


