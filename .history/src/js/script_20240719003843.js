
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

$(function(){
    $('.is-acti').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
  });