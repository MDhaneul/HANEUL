$(document).ready(function() {

    $('#header').prepend('<a href="../index.html" class="return_home">ABOUT</a>');
    $('.about_blur_box, .about_logo').addClass('action');
    $('#hamburger').addClass('ham_bg');
    
    var timer = 0;
    var $win = $(window);
    var $bBox = $('.about_blur_box');
    var $cnt = $('section article');
    var total = $cnt.length;
    var cntFirst = 0;
    var cntPosY;
    console.log(total, cntFirst);

    var $skills = $('#cnt4 ul');

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
                $bBox.stop().animate({top: '-5%', left: '-5%', width: '90%', height: '90%'});

            }
            else if (scrollY <= cntPosY[1] - 360) {
                $bBox.stop().animate({top: '10%', left: '15%', width: '90%', height: '90%'});
                $('#cnt2').find('ul').children().addClass('typing').closest('article').siblings().find('ul').children().removeClass('typing');
            }
            else if (scrollY <= cntPosY[2] - 200) {
                $bBox.stop().animate({top: '-5%', left: '-5%', width: '90%', height: '90%'});
                $('#cnt3').find('ul').children().addClass('typing').closest('article').siblings().find('ul').children().removeClass('typing');
            }
            else {
                $bBox.stop().animate({top: '10%', left: '15%', width: '90%', height: '90%'});
                $('#cnt4').find('ul').children().addClass('typing').closest('article').siblings().find('ul').children().removeClass('typing');
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

    $skills.find('button').on('click', function () {
        $(this).parent().append('<div class="skill_graph"></div>');
        $(this).parent().siblings().find('div').remove();
    });

    $skills.children().eq(0).find('button').trigger('click');
});