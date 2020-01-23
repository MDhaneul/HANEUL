$(document).ready(function() {

    $('#header').prepend('<a href="../index.html" class="return_home">DESIGN</a>');
    $('.design_blur_box, .design_logo').addClass('action');
    $('#hamburger').addClass('ham_bg');
    
    var timer = 0;
    var $win = $(window);
    var $bBox = $('.design_blur_box');
    var $cnt = $('section article');
    var total = $cnt.length;
    var cntFirst = 0;
    var cntPosY;
    console.log(total, cntFirst);

    $win.on('scroll', function() { 
        var targetHeight;
        var targetTop;
        var start;
        var end;
        var $vis = $(".visible");
        var winHei=$win.height();
        var scrollY = $(this).scrollTop();
        
        clearTimeout(timer);

        timer = setTimeout(function () {
            cntPosY = new Array(total);
            for (var i = 0; i < total; i++) {
                cntPosY[i] = $cnt.eq(i).offset().top + $cnt.eq(i).outerHeight();
            }
            console.log(scrollY, cntPosY);

            if (scrollY <= cntPosY[0] - 100) {
                $bBox.stop().animate({top: 0, left: '5%', width: '90%', height: '90%'});

            }
            else if (scrollY <= cntPosY[1] - 300) {
                $bBox.stop().animate({top: '5%', left: '-5%', width: '110%', height: '90%'});
            }
            else if (scrollY <= cntPosY[2] - 300) {
                $bBox.stop().animate({top: 0, left: '-5%', width: '90%', height: '90%'});
            }
            else if (scrollY <= cntPosY[3] - 300) {
                $bBox.stop().animate({top: '10%', left: '5%', width: '90%', height: '90%'});
            }
            else {
                $bBox.stop().animate({top: '2.5%', left: '5%', width: '95%', height: '90%'});
            }
        }, 10);

        $vis.each(function  () {
            targetHeight = $(this).outerHeight();
            targetTop = $(this).offset().top;

            start = targetTop + targetHeight * 0.5 - winHei;
            end = targetTop + targetHeight * 0.1;

            if (start < scrollY && end > scrollY) $(this).addClass("move");
            else $(this).removeClass("move");
        });
    });
});