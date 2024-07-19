
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.hamburger').on('click',function(){// .btnをクリックすると〜
        $('.hamburger').toggleClass('close');// .btnにcloseというクラスが追加される
        $('.drawer').fadeToggle(200);// navの表示・非表示切り替わる
      });
    });


      // resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  // 新しい関数: openDrawer
  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-active");
  }

  // 新しい関数: closeDrawer
  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-active");
  }

$(function(){
    $('.js-hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      return false;
    });
  });