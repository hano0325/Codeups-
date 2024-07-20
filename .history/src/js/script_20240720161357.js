
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

  pagetop_btn.addEventListener("click", scroll_top);

  function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
  
  // スクロールされたら表示
  window.addEventListener("scroll", scroll_event);
  function scroll_event() {
    if (window.pageYOffset > 100) {
      pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
      pagetop_btn.style.opacity = "0";
    }
  }