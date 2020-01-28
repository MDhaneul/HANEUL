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

            if (scrollY <= cntPosY[0] - 700) {
                $bBox.stop().animate({top: 0, left: '5%', width: '90%', height: '90%'});
                $('#content .design_bg').css({display: 'block'});
                $('#content').find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[1] - 300) {
                $bBox.stop().animate({top: 0, left: '5%', width: '90%', height: '100%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt2 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[2] - 300) {
                $bBox.stop().animate({top: 0, left: '-5%', width: '90%', height: '100%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt3 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[3] - 300) {
                $bBox.stop().animate({top: 0, left: '2.5%', width: '95%', height: '100%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt4 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else {
                $bBox.stop().animate({top: 0, left: '5%', width: '95%', height: '95%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt5 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
        }, 10);

        $vis.each(function  () {
            targetHeight = $(this).outerHeight();
            targetTop = $(this).offset().top;

            start = targetTop + targetHeight * 0.1 - winHei;
            end = targetTop + targetHeight * 0.1;

            if (start < scrollY && end > scrollY) $(this).addClass("move");
            else $(this).removeClass("move");
        });
    });

    var mySwiper = new Swiper('#cnt2 .swiper-container', {
        effect: 'fade',
        nested: true,
        touchEventsTarget: 'wrapper',
        loop: true,

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper2 = new Swiper('#cnt3 .swiper-container', {
        effect: 'fade',
        nested: true,
        touchEventsTarget: 'wrapper',
        loop: true,

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper3 = new Swiper('#cnt4 .swiper-container', {
        effect: 'fade',
        nested: true,
        touchEventsTarget: 'wrapper',
        loop: true,

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
});