/* global $*/
/* global a */
/* global on */

$(function() {
  $("footer").hide().fadeIn(2000);
  
  var colors = ['#FFFFFF', '#FFCCBF', '#FEBACE'];
  var random = Math.floor(Math.random()*colors.length);
  $('.main').addClass('red');
  $('button').on('click', function() {
      $('.page').css('background-color', colors[random]);
  });
  
});

