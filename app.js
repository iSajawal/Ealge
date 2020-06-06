
// Support and projects


$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $(".header-navbar").addClass("sticky-nav");
        } else {
            $(".header-navbar").removeClass("sticky-nav");
        }
    });

    });