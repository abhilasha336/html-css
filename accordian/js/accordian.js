$(document).ready(function () {
    $(".musiccontent").click(function () {
        $(".musicp").slideUp();
        $(this).next(".musicp").stop(true).slideDown();
        $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
        $(".musiccontent").addClass("extra");
        // $(".musiccontent").children().removeClass("fa-angle-down").addClass("fa-angle-up");
    });

    //xvxvcxzvxc
    // $(".musiccontent").dblclick(function () {
    //     $(".musiccontent").next(".musicp").stop(true).slideUp();
    //     $(".musiccontent").removeClass("extra");
    //     $(".musiccontent").children().removeClass("fa-angle-up").addClass("fa-angle-down");
    // });
});