
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $('.js-hamburger, .js-drawerClose').on('click', function () {
    if($('.js-hamburger').hasClass('is-active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
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
    $("body").addClass("no-scroll");  // スクロールを無効化
  }

  // 新しい関数: closeDrawer
  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-active");
    $("body").removeClass("no-scroll");   // スクロールを無効化
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
    const mvSwiper = new Swiper(".js-mv-swiper", {
      loop: true,
      effect: "fade",
      speed: 3000,
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
      },
    });

// キャンペーンセクション用のSwiper
var campaignSwiper = new Swiper('.js-campaign-swiper', {
  loop: true, // 無限ループ
  slidesPerView: 'auto', // 一度に表示するスライド数
  slidesPerGroup: 1, // 一度に移動するスライド数
  initialSlide: 1, // 初期表示スライド
  spaceBetween: 24, // スライド間のスペース
  autoplay: {
    delay: 2000, // 2秒ごとに自動でスライド
    disableOnInteraction: false // ユーザーが操作しても自動再生を止めない
  },
  pagination: {
    el: '.swiper-pagination', // ページネーションの要素
    clickable: true, // ページネーションをクリック可能にする
  },
  navigation: {
    nextEl: '.swiper-button-next', // 次へボタン
    prevEl: '.swiper-button-prev', // 前へボタン
  },
  breakpoints: {

    // タブレットおよびPC用（768px以上）
    768: {
      slidesPerView: 'auto', // 一度に表示するスライド数
      slidesPerGroup: 1, // 一度に移動するスライド数
      initialSlide: 1, // 初期表示スライド
      spaceBetween: 40, // スライド間のスペース
    }
  }
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
    // ページトップに戻るボタン
    $(function () {
      const pageTop = $(".js-page-top");
      pageTop.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          pageTop.fadeIn();
        } else {
          pageTop.fadeOut();
        }
      });
      pageTop.click(function () {
        $("body, html").animate(
          {
            scrollTop: 0,
          },
          300
        );
        return false;
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // タブのボタンとコンテンツをそれぞれ取得
    const tabButtons = document.querySelectorAll('.js-tab-button');
    const tabContents = document.querySelectorAll('.js-tab-content');
  
    tabButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // ボタンのdata-number属性を取得
        const targetTab = button.getAttribute('data-number');
  
        // すべてのボタンから「is-active」クラスを削除し、クリックされたボタンに付与
        tabButtons.forEach((btn) => btn.classList.remove('is-active'));
        button.classList.add('is-active');
  
        // すべてのタブコンテンツを非表示にし、対応するコンテンツだけを表示
        tabContents.forEach((content) => {
          if (content.getAttribute('id') === targetTab) {
            content.classList.add('is-active');
          } else {
            content.classList.remove('is-active');
          }
        });
      });
    });
  });

    // コース画像モーダル表示イベント
    $(".gallery-list__item img").click(function () {
      // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
      $("#grayDisplay").html($(this).prop("outerHTML"));
      //そして、fadeInで表示する。
      $("#grayDisplay").fadeIn(200);
      return false;
    });

    $("#grayDisplay").click(function () {
      // 非表示にする
      $("#grayDisplay").fadeOut(200);
      return false;
    });

    document.querySelectorAll('.archive-list__year').forEach(toggleButton => {
      toggleButton.addEventListener('click', () => {
        const monthsList = toggleButton.nextElementSibling;
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        monthsList.hidden = isExpanded;
        toggleButton.classList.toggle('is-active');
      });
    });
    