/* global, console, alert, prompt */

$(function () {
    "strict";
    $(".welcom").typed({
        strings: ["Hello welcom to Myhouse.", "We have beautiful designs."],
          loop:true,
          loopCount:Infinity,
          showCursor: false
      });
    var maxtext = $('textarea').attr('maxlength');
    $('.msg').html('<span>' + maxtext + '</span>');
    $('textarea').keyup(function () {
        
        var text = $(this).val().length;
        var resume = maxtext - text;
        $('.msg').html('<span>' + resume + '</span>')
    });
    
});





    
