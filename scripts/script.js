/* global $*/
/* global a */
/* global on */

$(function() {
  $("body").hide().fadeIn(2000);
  
  var colors = ['#FFFFFF', '#FFCCBF', '#FEBACE'];
  var random = Math.floor(Math.random()*colors.length);
 
  $('button').on('click', function() {
      $('.page').css('background-color', colors[random]);
  });
  $('.square5').on('click', function(){
    $('.square5').fadeOut('fast');
  })
});

