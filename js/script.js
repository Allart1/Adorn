// Kui dokument on valmis siis teen kõi htmli elementidega seotud asjad siin
jQuery(document).ready(function() {

    // valin .burger menu elemendi, kuulan kas seda klikitakse (event listening)
    jQuery(".burger-menu").click(function() {
        // Leian klikitud elemendi kõrvuti asuvad klassiga .fixed-sidebar elemendid, lisan klassi active
        jQuery(this).siblings(".fixed-sidebar").addClass("active");
    });
    // valin .close-button elemendi, kuulan kas seda klikitakse (event listening)
    jQuery(".close-button").click(function() {
        // Leian klikitud elemendi elemendi ümber asuvad klassiga .fixed-sidebar elemendid, eemaldan klassi active
        jQuery(this).closest(".fixed-sidebar").removeClass("active");
    });
    // valin .menu__has-children elemendi, kuulan kas selle peale minnakse hiirega (event listening)
    jQuery(".menu__has-children").hover(function() {
        // leian üles elemendi millel on hiir peal, otsin üles tema alamelemendid .menu__dropdown klassiga
        // katksestan eelnevad tegevused (.stop), vahetab vastavalt selle sama elemendi nähtavusele seda, kas rullib lahti või kinni (.slidetoggle)

        jQuery(this).children(".menu__dropdown").stop().slideToggle();
    });

    // inimene scrollib lehel 
    jQuery(window).scroll(function(event) {

        jQuery("header.fixed").slideDown();



    });

});