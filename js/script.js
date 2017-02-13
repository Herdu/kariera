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