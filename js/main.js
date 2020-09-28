$(document).ready(function() {
    
    // kuckanje u haderu
    var typed = new Typed('.element', {
        strings: ['radimo frntend sajta', 'radimo custom WP', 'postavljamo sajt na server'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });
    
    //  novosti
    $('.novosti').delay(2000).slideDown().delay(5000).fadeOut();
    
    
    //  owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    
});