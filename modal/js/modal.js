$(document).ready(function () {
    $(".button").click(function () {
        $(".modelcontainer").addClass("dispb")
        $(".button").addClass("dispn")
        $("body").addClass("dispc");
    });
    $(".button1").click(function () {
        $(".modelcontainer").removeClass("dispb")
        $(".button").removeClass("dispn")
        $("body").removeClass("dispc");
    });
    $(".close").click(function () {
        $(".modelcontainer").removeClass("dispb")
        $(".button").removeClass("dispn")
        $("body").removeClass("dispc");
    });
});