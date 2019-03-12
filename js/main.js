// Animate smooth scroll
/*
$('#view-work').on('click', function(){
    const me = $('#me').position().top;

    $('html, body').animate({
        scrollTop: me
    }, 900);
});
*/
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
}
function changeColor(){
    document.getElementById('one').style.stroke = '#5B5F63';
    document.getElementById('two').style.stroke = '#5B5F63';
    document.getElementById('three').style.stroke = '#5B5F63';
}
function revertColor(){
    document.getElementById('one').style.stroke = '#312F2F';
    document.getElementById('two').style.stroke = '#312F2F';
    document.getElementById('three').style.stroke = '#312F2F';
}
