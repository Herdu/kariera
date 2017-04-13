/**
 * Created by mateu on 14.11.2016.
 */

var dlugosc_slajdu = 7500;

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

/** MAP interval
 **/
var dlugosc_mapy = 4000;
var currentMap = 1;

var displayMap = function(){
    currentMap = (currentMap%3)+1;
    console.log(currentMap);
    $(".map-description").css("display","none");
    switch (currentMap){
        case 1:
            $('#our-map').attr("class","yesterday");
            $("#map-description-yesterday").fadeIn();
            break;
        case 2:
            $('#our-map').attr("class","today");
            $("#map-description-today").fadeIn();
            break;
        case 3:
            $('#our-map').attr("class","tomorrow");
            $("#map-description-tomorrow").fadeIn();
            break;
    }
}

setInterval(displayMap,dlugosc_mapy);


$('#sales-btn').on("click", function(){
    $('.management').fadeOut();
    $('.administration').fadeOut();
    $('.sale').fadeToggle();

});

$('#management-btn').on("click", function(){
    $('.sale').fadeOut();
    $('.administration').fadeOut();
    $('.management').fadeToggle();

});

$('#administration-btn').on("click", function(){
    $('.management').fadeOut();
    $('.sale').fadeOut();
    $('.administration').fadeToggle();
});