
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

$(function(){
    $('.js-humburger').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
  });