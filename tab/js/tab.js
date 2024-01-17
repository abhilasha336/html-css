$(document).ready(function () {
    /*$('#tone').click(function () {
        $('#block11').show();
        $('#block12').hide();
        $('#block13').hide();
        $('#block14').hide();
    });
    $('#ttwo').click(function () {
        $('#block11').hide();
        $('#block13').hide();
        $('#block14').hide();
        $('#block12').show();
    });
    $('#tthree').click(function () {
        $('#block11').hide();
        $('#block12').hide();
        $('#block14').hide();
        $('#block13').show();
    });
    $('#tfour').click(function () {
        $('#block11').hide();
        $('#block12').hide();
        $('#block13').hide();
        $('#block14').show();
    });*/
    $('.tab').click(function () {
        $('.tab').removeClass("select");
        $(this).addClass("select");
        var tabContent = $(this).attr('data-tab');
        //  var tabContent = $(this).data('tab');
        $(".content").hide();
        $("." + tabContent).show();
    });

});