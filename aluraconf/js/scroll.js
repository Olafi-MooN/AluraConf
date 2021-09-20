$("a[href^='#sobre']").click(function() {
    $('html, body').animate({
        scrollTop: $("#sobre").offset().top
    }, 2000);
});

$("a[href^='#palestrantes']").click(function() {
    $('html, body').animate({
        scrollTop: $("#palestrantes").offset().top
    }, 2000);
});

$("a[href^='#inscreva']").click(function() {
    $('html, body').animate({
        scrollTop: $("#inscreva").offset().top
    }, 2000);
});


