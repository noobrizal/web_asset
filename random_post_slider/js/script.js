$(document).ready(function() {
    $("#footer").append('<div class="btn"><a href="#" target="_blank">Back To The Tutorial</a></div>');
    $('a[target="_blank"]').removeAttr('target');
});


$(window).load(function() {
    var maxW = $('.flexslider').attr('style');
    $('#code-section').attr('style', maxW);




});
