$(document).ready(function() {

    var $gnb = $('#gnb');
    var $first = $gnb.find('[data-link="first"]');
    var $last = $gnb.find('[data-link="last"]');

    $gnb.prepend('<div class="gnb_window"></div>');
    $gnb.prepend('<div class="gnb_bg"></div>');
    $('#hamburger').on('click', function () {
        if ($(this).hasClass('addon')) {
            $gnb.stop().fadeOut(600).animate({visibility: 'hidden'});

            $(this).removeClass('addon').find('.sr-only').text('메뉴 열기');
            $('.return_home').removeClass('addon');
        } else {
            scrollL = $(this).scrollLeft();
            var scrollMove = scrollL;
            console.log(scrollMove);

            $(this).addClass('addon').find('sr-only').text('메뉴 닫기');
            $('.return_home').addClass('addon');

            $gnb.css({visibility: 'visible'}).stop().fadeIn(600);
            $first.focus();

            $first.on('keydown', function (e) {
                console.log(e.keyCode);
                if (e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });
            $last.on('keydown', function (e) {
                if (!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('#hamburger').focus();
                }
            });
        };
    });
    
    $gnb.find('ul').children().eq(2).find('> a').on('click', function(e) {
        e.preventDefault();
        if ($(this).next().hasClass('dep_open')) {
            $(this).removeClass('open_icon').next().removeClass('dep_open');
            $(this).next().find('.dep_bg').remove();
            $gnb.removeClass('window_on');
        } else {
            $(this).addClass('open_icon').next().addClass('dep_open');
            $(this).next().prepend('<div class="dep_bg"></div>');
            $gnb.addClass('window_on');
        }
    });
});