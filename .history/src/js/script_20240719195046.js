
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.btn').on('click',function(){// .btnをクリックすると〜
        $('.hamburger').toggleClass('close');// .btnにcloseというクラスが追加される
        $('.drawer').fadeToggle(500);// navの表示・非表示切り替わる
      });
    });

$(function(){
    $('.js-humburger').on('click', function() {
      $(this).toggleClass('is-active');
      return false;
    });
  });