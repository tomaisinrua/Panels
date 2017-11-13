$(document).ready(function(){
 /*$(".theButton").click(function() {
     $("#panel .container").siblings().fadeTo("slow", 0.1 );
 });
 $(".superButton").click(function() {
    $(".container").fadeTo("slow", 1); 
 });
 $(".theButton").hover(function() {
     $(this).toggleClass("blackbg");
 });*/
 $(".theButton").click(function() {
     var panelColor = $(this).css("background-color");
     $(".superButton").text(panelColor);
 });
});