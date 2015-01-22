
$("document").ready(function() {
    $('#superHumans').accordion({header: "h3"});
    $(".whatdoyouwanttoput").css("background-color", "aqua");
    $("p").css("background-color", "red");
    $("h1").css("background-color", "lime");
    /*
     * Makes the colors on my page.
     */
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#slideBack').bind('click', unslideTheImage);
    $('#addAPara').bind('click', addAPara);
    $('#slideAway').bind('click', slideTheImage);
    $('#slideBack').bind('click', unslideTheImage);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    /*
     * Binds all the buttons so they work.
     */
});

function mouseOverMe() {
    $("h1").html("Morgan Freeman");
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