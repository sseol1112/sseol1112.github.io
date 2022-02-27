$(function(){
 var swiper = new Swiper('.main_vis .swiper-container', {
    pagination: {
      el: '.main_vis .swiper-pagination',
      clickable: true,
    }
  });

  var main_banner = new Swiper('.main_banner .swiper-container', {
      pagination: {
          el: '.main_banner .swiper-pagination',
          clickable: true,
    }
  });
  var sub_banner = new Swiper('.sub_banner .swiper-container', {
      direction: 'vertical',
  });
  
  main_banner.controller.control = sub_banner ;
  sub_banner.controller.control = main_banner;

  var mySwiper2 = new Swiper('.best_wrap .swiper-container', {
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
          nextEl: '.best_wrap .next',
          prevEl: '.best_wrap .prev',
      },

  })
  
  var mySwiper2 = new Swiper('.scroll_book .swiper-container', {
      spaceBetween: 5,
      slidesPerView: "auto",
      freeMode: true,
      observer: true,
      observeParents: true,
      scrollbar: {
          el: '.scroll_book .swiper-scrollbar',
          // hide: true,
      },
      

  })

      /* category */
      $(".img_area .img_wrap img").show();
      $(".list_area li a").hover(function(){
          dataimg = $(this).attr("data-src");
          $(".list_area li").removeClass("on");
          $(this).parent().addClass('on');
         
          $(".img_area .img_wrap a img").attr("src",dataimg);
          $(".img_area .img_wrap a img").show();

      })
      /* best */
      $(".scroll_best .swiper-slide, .scroll_book .swiper-slide").mouseenter(function(){
          $(this).find(".txt_wrap").stop().animate({top:"50%"},700);
      })
      $(".scroll_best .swiper-slide, .scroll_book .swiper-slide").mouseleave(function(){
          $(this).find(".txt_wrap").stop().animate({top:"-50%"},700);
      })
      /* lookbook */
      $(".look_head ul li").click(function(){
          idx = $(this).index()+1;
          $(".look_head ul li").removeClass("on");
          $(this).addClass("on");
          $(".scroll_book .swiper-container").removeClass("on");
          $('#look0'+idx).addClass("on");
      })
  });