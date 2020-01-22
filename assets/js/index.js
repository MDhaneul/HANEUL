$(document).ready(function() {
    var $introVid = $('.idx_vidwrap .intro_video');

    $introVid.focus();
    $('#hamburger').hide();
    $('#footer').hide();

    $introVid.on('click keydown', function(e) {
        var key = e.keyCode;
        console.log(key);
        $(this).stop().css('tabIndex', -1).fadeOut().parent().hide();
        $('.idx_blur_box').addClass('action');
        $('#hamburger').fadeIn(4000);
        $('#footer').fadeIn(4000);
        $('.idx_who, .idx_port').stop().delay(1000).animate({opacity: 1}, 1500);
    });
});