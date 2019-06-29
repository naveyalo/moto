$(function() {
    var menuLink = $('.menu-link');
    var menu = $('.menu');
    var close = $('.close-btn');



    menuLink.click(function() {
        menu.toggleClass('active-menu');
    });
    close.click(function() {
        menu.toggleClass('active-menu');
    });

});

