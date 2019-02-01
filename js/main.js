// Animate smooth scroll
$('#view-work').on('click', function(){
    const me = $('#me').position().top;

    $('html, body').animate({
        scrollTop: me
    }, 900);
});