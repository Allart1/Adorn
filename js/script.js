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


    // Teen muutuja, et hiljem salvestada scrollimis kõrgus 
    var kui_korgel;
    // Teen muutuja, mis salvestab kui kõrgel on #activate-fixed-header seaktsioon ülevalt(offset().top)
    var activateFixedHeader = jQuery("#activate-fixed-header").offset().top;
    console.log(activateFixedHeader);
    // inimene scrollib lehel 
    jQuery(window).scroll(function(event) {
        // Salvestan kasutaja kõrguse selle akna suhtes
        kui_korgel = jQuery(this).scrollTop();



        // kontrollin, kui kõrgel on kasutaja võrreldes minu valitud sektsiooni kõrgusega
        // Kui inimene on konkreetsest kõrgusest allpool siis fikseeritud päis tuleb nähtavaks, muidu peidus
        if (kui_korgel > activateFixedHeader) {
            jQuery("header.fixed").slideDown();

        } else {
            jQuery("header.fixed").slideUp();
        }



    });

});