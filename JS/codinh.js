$(document).ready(function() {
    var aboveHeight = $('header').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > aboveHeight){
            $('sticknav').addClass('fixed').css('top','0').next().css('padding-top','60px');
            } else {
           $('sticknav').removeClass('fixed').next().css('padding-top','0');
            }
        });
    });