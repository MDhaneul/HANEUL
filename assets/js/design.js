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

    $win.on('resize', function() {
        var winWidth = $(this).outerWidth();
        if (winWidth <= 1450) $('.swiper-container .swiper-wrapper .swiper-slide p').css({left: -9999});
        else $('.swiper-container .swiper-wrapper .swiper-slide p').css({left: 850});
    });

    $win.trigger('resize');

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
                $bBox.stop().animate({top: "-5%", left: '5%', width: '90%', height: '95%'});
                $('#content .design_bg').css({display: 'block'});
                $('#content').find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[1] - 300) {
                $bBox.stop().animate({top: "-2%", left: '5%', width: '90%', height: '105%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt2 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[2] - 300) {
                $bBox.stop().animate({top: "-2%", left: '-5%', width: '95%', height: '105%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt3 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else if (scrollY <= cntPosY[3] - 300) {
                $bBox.stop().animate({top: "-2%", left: '15%', width: '90%', height: '105%'});
                $('#content .design_bg').css({display: 'none'});
                $('#cnt4 .cnt_bg').css({display: 'block'}).parent().siblings().find('.cnt_bg').css({display: 'none'});
            }
            else {
                $bBox.stop().animate({top: "-2%", left: '5%', width: '95%', height: '97%'});
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
        simulateTouch: false,
        loop: true,

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    var $slider = $('#cnt4 .cnt_bg');
    var $bgbtn = $('#cnt4 > .swiper-container > div');
    var $indiEle = $slider.find('div');
    var total = $indiEle.length;
    var current = 0;
    var nextNum;
    console.log(total);

    function sliders() {
        $indiEle.eq(current).css('left', 0).stop().animate({top: '-100%'}, function () {
            $(this).hide();
        });
        $indiEle.eq(nextNum).css({display: 'block', top: '100%'}).stop().animate({top: 0});
        current = nextNum;
    }

    $bgbtn.on('click', function () {
        var btnNum = $(this).index();
        console.log(btnNum);

        if ($(this).index() == 0) return false;

        btnNum == 1? nextNum = current - 1 : nextNum = current + 1;
        if (nextNum == -1) nextNum = total - 1;
        else if (nextNum == total) nextNum = 0;
        
        sliders();
    });
});