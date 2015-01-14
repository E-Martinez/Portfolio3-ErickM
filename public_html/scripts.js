/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".whatdoyouwanttoput").css("background-color", "aqua");
    $("p").css("background-color", "red");
    $("h1").css("background-color", "lime");
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
});

function mouseOverMe() {
    $("h1").html("Morgan Freeman");
}

function mouseOutMe() {
    $("h1").html("Turtles");
}