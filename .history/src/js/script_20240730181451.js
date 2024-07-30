
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger, .js-drawer").click(function() {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  })
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

  var topBtn = $('.cycle__button');
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // mvセクション用のSwiper
    const mvSwiper = new Swiper(".mv__slider.swiper", {
      loop: true,
      effect: "fade",
      speed: 3000,
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
      },
    });

    // キャンペーンセクション用のSwiper
    var campaignSwiper = new Swiper('.swiper-container', {
      // loop: true, // 無限ループ
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          slidesPerView: 3, // 一度に表示する枚数
          speed: 6000, // ループの時間
          allowTouchMove: false, // スワイプ無効
          autoplay: {
            delay: 0, // 途切れなくループ
      },
      navigation: {
          nextEl: '.campaign-button-next',
          prevEl: '.campaign-button-prev',
      },
    });}
  });


//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'auto' , 'right':'0'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});