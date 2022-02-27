$(function(){
  // menu sec_slide


  var con = new Swiper('.container', {
    autoHeight: true, //enable auto height
    centeredSlides:true,
    simulateTouch:false,
    initialSlide: 1,
  });



  // thumb.controller.control = con;
  // con.controller.control = thumb;


  $('.left_cont').click(function() {
    con.slideTo(0);
    thumb.slidePrev();
  })

  $('.right_cont').click(function(){
    con.slideTo(2);
  thumb.slideNext();
  })

  setTimeout($('.img_box').addClass('on'), 2000);


  var swiper2 = new Swiper('.exhibits_wrap .swiper-container', {
      pagination: {
        el: '.exhibits_wrap  .swiper-pagination',
        type: 'progressbar',
      },

  });

  var swiper3 = new Swiper('.media_wrap .swiper-container', {
      pagination: {
        el: '.media_wrap .swiper-pagination',
        clickable: true,
      },
  });

  var right_banner = new Swiper('.right_banner .swiper-container', {
      pagination: {
          el: '.right_banner .swiper-pagination',
          clickable: true,
    }
  });
  var left_banner = new Swiper('.left_banner .swiper-container', {
      direction: 'vertical',
  });

  right_banner.controller.control = left_banner;
  left_banner.controller.control = right_banner;

  var swiper4 = new Swiper('.left_article .sec1 .swiper-container', {
      slidesPerView: 'auto',
      // centeredSlides: true,
      // initialSlide: 1,
      spaceBetween: 20,
      pagination: {
        el: '.left_article .sec1 .swiper-pagination',
        clickable: true,
      },

  });

  var swiper5 = new Swiper('#list1 .swiper-container', {
      slidesPerView:'auto',
      spaceBetween:20,
    });

  // var swiper6 = new Swiper('#list2 .swiper-container', {
  //     effect: 'coverflow',
  //     grabCursor: true,
  //     centeredSlides: true,
  //     slidesPerView: 'auto',
  //     coverflowEffect: {
  //       rotate: 50,
  //       stretch: 0,
  //       depth: 100,
  //       modifier: 1,
  //       slideShadows: true,
  //     },

  //   });

    $("#list1 .swiper-container").each(function(elem, target){
      var swp = target.swiper;
      $(this).hover(function() {
          swp.autoplay.stop();
      }, function() {
          swp.autoplay.start();
      });
    });

  $('.intro_area .tab_wrap ul li').click(function(){
    idx = $(this).index()+1;
    $('.intro_area .tab_wrap ul li span,.cont_wrap .cont_area').removeClass("on");
    $(this).find('span').addClass("on");
    $(".cont_wrap .cont"+idx).addClass("on");
  })


  $('.sec1 .gal_head a').click(function(){
      idx = $(this).index()+1;
      $('.sec1 .gal_head a').removeClass('on');
      $(this).addClass('on');
      $('.sec1 .gal_list li').removeClass("on");
      $('#list'+idx).addClass("on");
  })

  $('.right_article .sec1 .pic_list .swiper-slide .img_wrap').hover(function(){
    $(this).next().animate({bottom:'60px'},500);
  })
  /* random 이미지 가져오기 */
  function random_image()
  {
  var myimages = new Array();
  var myTexts = new Array();
  // 이곳에 출력할 이미지 주소를 계속해서 아래의 방법처럼 기입해 주세요
  myimages[0] = "images/wall8.jpg";
  myimages[1] = "images/wall5.jpg";
  myimages[2] = "images/wall6.jpg";

  myTexts[0] = '<h2>“디뮤지엄이 이사를 떠납니다. 어디로?”</h2>'+'<p>궁금하다면, 온라인 회원 가입하고</p>';
  myTexts[1] = '<h2>디뮤지엄에서 진행하는 전시를 만나보세요.</h2>'+ '<p>현재 진행중인 전시</p>';


  var randomImg = Math.floor( Math.random() * (myimages.length) );
  var randomTxt = Math.floor( Math.random() * (myTexts.length) );

  $('#imgArea').find("img").attr('src',myimages[randomImg]);
  $('.vis_banner .txt_wrap').prepend(myTexts[randomTxt]);

  }

  random_image();




  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    lpercentPosition: true,
    // layoutMode: 'fitRows',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  // filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  }};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
var filterValue = $( this ).attr('data-filter');
// use filterFn if matches value
filterValue = filterFns[ filterValue ] || filterValue;
$grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
var $buttonGroup = $( buttonGroup );
$buttonGroup.on( 'click', 'button', function() {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  $( this ).addClass('is-checked');
});
});

$('.hamburger_btn').click(function(){
$('.sub_wrap').stop().animate({right:'-10px'},500);
})

$('.sub_wrap .close').click(function(){
$('.sub_wrap').stop().animate({right:'-999%'},500);
})

$('.depth1').click(function(){
var h = $(this).find('.depth2 ul').height();
// console.log(h);
if($(this).find('.depth2').height() > 0){
  $('.depth2').stop().animate({height:'0'},500);
}else{
  $('.depth2').stop().animate({height:'0'},500);
  $(this).find('.depth2').stop().animate({height:h},500);
}
})

var controller = new ScrollMagic.Controller();

var tween1 =TweenMax.fromTo(".intro_wrap h2", 0.6, {
x:'-10%',
}, {
x:'90%',
opacity:0
})

var scene = new ScrollMagic.Scene({
triggerElement: ".intro_wrap",
duration: "100%",
})
.setTween(tween1)
.addTo(controller)
// .addIndicators({
//   name: "1"
// })


var tween2 =TweenMax.fromTo(".exhibits_wrap h2", 0.6, {
x:'90%',
}, {
x:'10%',
opacity:0
})

var scene = new ScrollMagic.Scene({
triggerElement: ".exhibits_wrap",
duration: "100%",
offset:-300,
})
.setTween(tween2)
.addTo(controller)
// .addIndicators({
//   name: "1"
// })

var tween3 =TweenMax.fromTo(".media_wrap span", 0.6, {
x:'10%',
}, {
x:'90%',


})

var scene = new ScrollMagic.Scene({
triggerElement: ".media_wrap",
duration: "100%",
offset:-300,
})
.setTween(tween3)
.addTo(controller)
// .addIndicators({
//   name: "1"
// })

var thumb = new Swiper('.menu_slide', {
slidesPerView: 3,
centeredSlides:true,
simulateTouch:false,
initialSlide: 1,
loop:true,
navigation: {
  nextEl: '.menu_slide .next',
  prevEl: '.menu_slide .prev',
},
on:{
  slideChange:function(){
    con.slideTo(this.realIndex);
    if(this.realIndex == 1){
      //controller.reset();
    }else{
      // controller.destroy();
      // controller = null;
    }

  }
}


});

});