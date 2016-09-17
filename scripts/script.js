/* global $*/
/* global a */
/* global on */

$(function() {
  $("body").hide().fadeIn(2000);

  var colors = ['red', 'blue', 'green'];
  var random = Math.floor(Math.random() * colors.length);

  $('button').on('click', function color() {
      $('.page').css({ 'background-color': colors[random] });
       var button = document.getElementsByTagName('button');
        button.queue(function color() {
          
        });

  });
  $('.square5').on('click', function deletion() {
    $(".square5").remove();
  });

});
