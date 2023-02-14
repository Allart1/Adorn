jQuery(document).ready(function() {

    jQuery(".burger-menu").click(function() {
        jQuery(this).siblings(".fixed-sidebar").addClass("active");
    });
    jQuery(".close-button").click(function() {
        jQuery(this).closest(".fixed-sidebar").removeClass("active");
    });

    jQuery(".menu__has-children").hover(function() {
        jQuery(this).children(".menu__dropdown").stop().slideToggle();
    });


    jQuery(window).scroll(function(event) {

        jQuery("header.fixed").slideDown();



    });

});