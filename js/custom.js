$(document).ready(function() {
    //Prevent Page Reload on all # links
    $("a[href='#']").click(function(e) {
      e.preventDefault();
    });


    /* Window scroll */
    $(window).scroll(function() {
      var scrollTopPos = $(window).scrollTop();
      $(".hero-banner li.active .hero-img").css({
        "transform": "translateY(" + scrollTopPos / 2 + "px)"
      })
      $(".hero-banner li.active .hero-content .container").css({
        "transform": "translateY(" + scrollTopPos / 1.9 + "px)"
      })

      if ($(window).scrollTop() > 100)
        $("body").addClass('fixed-header');
      else
        $("body").removeClass('fixed-header');
    });

    // Slider jQuery
    var $windowW = $(window).innerWidth(),
    $sliderItems = $(".hero-banner li").length;
    $(".hero-banner li:first-child").addClass('active');
    $(".hero-banner li").width($windowW);
    $(".hero-banner ul").width($windowW * $sliderItems);


    $(".next-slide").click(function() {
      if ($(".hero-banner li.active").next().length) {
        $(".hero-banner li.active").removeClass('active').next().addClass('active');
        var activeSlide = $(".hero-banner li.active").index();
        $(".hero-banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
      }
    });

    $(".prev-slide").click(function() {
      if ($(".hero-banner li.active").prev().length) {
        $(".hero-banner li.active").removeClass('active').prev().addClass('active');
        var activeSlide = $(".hero-banner li.active").index();
        $(".hero-banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
      }
    });

    var $resizeDone;
    $(window).resize(function(event) {
      clearTimeout($resizeDone);
      $resizeDone = setTimeout(function() {
        $windowW = $(window).innerWidth(),
        $sliderItems = $(".hero-banner li").length;
        $(".hero-banner li").width($windowW);
        $(".hero-banner ul").width($windowW * $sliderItems);
        var activeSlide = $(".hero-banner li.active").index();
        $(".hero-banner ul").css("transform", "translateX(" + -(activeSlide * $windowW) + "px)");
      }, 50);
    });

    /*mobile menu*/
    $(".menu-icon").click(function() {
      $("html,body").toggleClass("open-menu");
    });

  });