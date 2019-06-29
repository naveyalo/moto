$(function() {
    var menuLink = $('.monfree-link');
    var menu = $('.header-monfree');
    var closes = $('.close-btns');



    menuLink.click(function() {
        menu.toggleClass('monfree-active');
    });
    closes.click(function() {
        menu.toggleClass('monfree-active');
    });

});