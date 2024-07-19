
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(function() {
    $('.btn').on('click',function(){　　// .btnをクリックすると〜
        $('.btn').toggleClass('close');　　// .btnにcloseというクラスが追加される
        $('nav').fadeToggle(500);　　// navの表示・非表示切り替わる
      });
    });

});

$(function(){
    $('.js-humburger').on('click', function() {
      $(this).toggleClass('is-active');
      return false;
    });
  });