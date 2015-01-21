

$("document").ready(function() {
    $(".whatdoyouwanttoput").css("background-color", "aqua");
    $("p").css("background-color", "red");
    $("h1").css("background-color", "lime");
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#superHumans').accordion({header: "h3"});
    $('#slideAway').bind('click', slideTheImage);
    $('#slideBack').bind('click', unslideTheImage);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    /*
     * 
     */
});

function mouseOverMe() {
    $("h1").html("Morgan Freemann");
}

function mouseOutMe() {
    $("h1").html("Turtles");
}

function slideTheImage() {
    $('#slide').slideUp(300);
}

function unslideTheImage() {
    $('#slide').slideDown(750);
}

function addAPara() {
    $('#Hi').append('<p>Sample text</p>');
}

function removeAPara() {
    $('#Hi p:last').remove();
}