$(document).ready(function() {

    $('#header').prepend('<a href="../index.html" class="return_home">WEB</a>');
    $('.web_blur_box, .web_logo').addClass('action');
    $('#hamburger').addClass('ham_bg');
    
    var timer = 0;
    var $win = $(window);
    var $bBox = $('.web_blur_box');
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

            if (scrollY <= cntPosY[0] - 200) {
                $bBox.stop().animate({top: '-5%', left: '15%', width: '90%', height: '90%'});
                $('#content article').find('video').css({display: 'none'});
                $('#content .web_bg').css({display: 'block'});
            }
            else if (scrollY <= cntPosY[1] - 400) {
                $bBox.stop().animate({top: '5%', left: '-5%', width: '95%', height: '90%'});
                $('#cnt2').find('video').css({display: 'block'}).parent().siblings().find('video').css({display: 'none'});
                $('#content .web_bg').css({display: 'none'});
            }
            else {
                $bBox.stop().animate({top: '5%', left: '10%', width: '95%', height: '90%'});
                $('#cnt3').find('video').css({display: 'block'}).parent().siblings().find('video').css({display: 'none'});
                $('#content .web_bg').css({display: 'none'});
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

    $('.tab:first-of-type, .tabpanel:first-of-type').addClass('tab_on').attr('tabIndex', 0);
    $('.tab:first-of-type').attr('aria-selected', true);
    $('.tabpanel:first-of-type').attr('aria-hidden', true);

    $('.tab').on('keydown', function (e) {
        var key = e.keyCode;
        console.log(key);

        switch (key) {
            case 38:
                $(this).attr('tabIndex', -1);
                if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
                else $(this).prev().attr('tabIndex', 0).focus();
                break;
            case 40:
                $(this).attr('tabIndex', -1);
                if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
                else $(this).next().attr('tabIndex', 0).focus();
                break;
            case 36:
                e.preventDefault();
                $(this).siblings('.first').attr('tabIndex', 0).focus();
                break;
            case 35:
                e.preventDefault();
                $(this).siblings('.last').attr('tabIndex', 0).focus();
                break;
            case 13:
            case 32:
            var $tg = $(this);
            tabActive($tg);
        }
    });

    $('.tab').on('click', function() {
        var $tg = $(this);
        tabActive($tg);
    });

    function tabActive($target) {
        console.log($target);

        $target.addClass('tab_on').attr({tabIndex : 0, 'aria-selected' : true}).siblings().removeClass('tab_on').attr({tabIndex : -1, 'aria-selected' : false})
        
        console.log($target.attr('aria-controls'), typeof $target.attr('aria-controls'));
        $('#' + $target.attr('aria-controls')).addClass('tab_on').attr({tabIndex : 0, 'aria-hidden' : false}).siblings('.tabpanel').removeClass('tab_on').attr({tabIndex : -1, 'aria-hidden' : true});
    }
});