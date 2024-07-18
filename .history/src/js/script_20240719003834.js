
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

$(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
  });