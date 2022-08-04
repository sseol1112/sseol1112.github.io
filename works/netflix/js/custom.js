$(function(){
    var swiper1 = new Swiper('.main_vis .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop:true,

        pagination: {
        el: '.main_vis .swiper-pagination',
        dynamicBullets: true,
        },
    });

    var rankList = document.getElementById("rank");
    var resultHtml = "";
    var resultHtml1 = "";
    var resultHtml2 = "";
    var resultHtml3 = "";
    var resultHtml4 = "";
    var resultHtml5 = "";

  
      rankChk();
      watchingList();
      myList();
      ogList();
      actorList();

      $(".all").click(function(e){
            e.preventDefault();
            $.ajax({
                url:"rankList.json",
                datatype:"json",
                type:"get",
                success : function(data){
                    
                    
                    resultHtml1 += "<ul>"
                    for(var i=0; i<data.ranking.length;i++){
                    resultHtml1 += "<li>";
                    resultHtml1 += "<div class='txt_wrap'>";
                    resultHtml1 += "<em>"+data.ranking[i].rank+"</em>";
                    resultHtml1 += "<strong>"+data.ranking[i].title+"</strong>";
                    resultHtml1 += "<p>"+"<span>"+data.ranking[i].view+"</span>"+" views</p>"  
                    resultHtml1 += "</div>";
                    resultHtml1 += "</li>";
                    } 
                    resultHtml1 += "</ul>"
                    $('#rank ul li').css("display","");
                    rankList.innerHTML = resultHtml1;
                    $('.all').hide();
                },
                error : function(){
                    console.log("error!")
                }
            })
      })
      

      $(".depth1 > li").click(function(){
        var h = $(this).find("ul").height();
        // console.log(h);
        if($(this).find('.depth2').height() > 0){
            $('.depth2').stop().animate({height:"0"},500);
        }else{
            $('.depth2').stop().animate({height:"0"},500);
            $(this).find('.depth2').stop().animate({height:h}, 500)
        }
      });
      $(".menu").click(function(){
        $(".depth1").animate({left:"-28px"},500);
      });
      $(".close").click(function(){
        $('.depth2').stop().animate({height:"0"},500);
        $(".depth1").animate({left:"-999%"},500);
        return false;
      });
      
      function rankChk(){
      $.ajax({
              url:"rankList.json",
              datatype:"json",
              type:"get",
              success : function(data){
                  
                  resultHtml += "<ul>"
                  for(var i=0; i<5;i++){
                    resultHtml += "<li>";
                    resultHtml += "<div class='txt_wrap'>";
                    resultHtml += "<em>"+data.ranking[i].rank+"</em>";
                    resultHtml += "<strong>"+data.ranking[i].title+"</strong>";
                    resultHtml += "<p>"+"<span>"+data.ranking[i].view+"</span>"+" views</p>"  
                    resultHtml += "</div>";
                    resultHtml += "</li>";
                  } 
                  resultHtml += "</ul>"
                  //console.log(resultHtml);
                  rankList.innerHTML = resultHtml;
              },
              error : function(){
                  console.log("error!")
              }
          })
      }


      function watchingList(){ 
          $.ajax({
              url:"media.json",
              datatype:"json",
              type:"get",
              success: function(data){
                
                resultHtml2 += "<div class='swiper-container'>";
                resultHtml2 += "<div class='swiper-wrapper'>";
                for(var i=0; i < data.mediaList.length; i++){
                    resultHtml2 += "<div class='swiper-slide'>";
                    resultHtml2 += "<div class='img_wrap'>"+"<img src='"+data.mediaList[i].img+"' alt='"+data.mediaList[i].img_alt+"'>"+"</div>"
                    resultHtml2 += "<div class='txt_wrap'>"+"<span class='gazing'>"+"<span style='width:"+data.mediaList[i].ratio+"'></span>"+"</span>";
                    resultHtml2 += "<strong class='tit'>"+data.mediaList[i].subtit+"</strong>"+"</div>";
                    resultHtml2 += "</div>";
                }
                resultHtml2 += "</div>";
                resultHtml2 += "<div class='swiper-pagination'></div>";
                resultHtml2 += "</div>";
                $('#mediaList1').append(resultHtml2);
                
                var swiper2 = new Swiper('.waching_area .swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    pagination: {
                    el: '.waching_area .swiper-pagination'
                    }
                });
              },
              error : function(){
                  console.log("error!");
              }
              
          })
      }

      function myList(){
          $.ajax({
              url:"mylist.json",
              datatype:"json",
              success:function(data){
                  resultHtml3 += "<ul class='swiper-wrapper'>";
                  for(var i=0; i<data.myList.length; i++){
                      resultHtml3 += "<li class='swiper-slide'>";
                      resultHtml3 += "<a href=''>";
                      resultHtml3 += "<div class='img_wrap'>"+"<img src='"+data.myList[i].img+"'>"+"</div>";
                      resultHtml3 += "</a>";
                      resultHtml3 += "</li>";
                  }
                  resultHtml3 += "</ul>";
                  $("#mediaList2").append(resultHtml3);
                  
                  var swiper3 = new Swiper('.mylist_area .swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    pagination: {
                    el: '.mylist_area .swiper-pagination'
                    }
                });

              },
              error:function(){
                console.log("error!");
              }
          })
      }

      function ogList(){
        $.ajax({
            url:"oglist.json",
            datatype:"json",
            success:function(data){
                resultHtml4 += "<div class='swiper-container'>";
                resultHtml4 += "<div class='swiper-wrapper'>";
                for(var i=0; i < data.ogList.length; i++){
                    resultHtml4 += "<div class='swiper-slide'>";
                    resultHtml4 += "<div class='img_wrap'>"+"<img src='"+data.ogList[i].img+"' alt='"+data.ogList[i].img_alt+"'>"+"</div>"
                    resultHtml4 += "</div>";
                }
                resultHtml4 += "</div>";
                resultHtml4 += "<div class='swiper-pagination'></div>";
                resultHtml4 += "</div>";
                $('#mediaList3').append(resultHtml4);
                
                var swiper4 = new Swiper('.oglist_area .swiper-container', {
                  slidesPerView: 'auto',
                  spaceBetween: 10,
                  pagination: {
                  el: '.oglist_area .swiper-pagination'
                  }
              });

            },
            error:function(){
              console.log("error!");
            }
        })
    }

    function actorList(){
        $.ajax({
            url:"actor.json",
            datatype:"json",
            success:function(data){
                resultHtml5 += "<div class='swiper-wrapper'>";
                for(var i=0; i<data.actorList.length;i++){
                    resultHtml5 += "<div class='swiper-slide'>";
                    resultHtml5 += "    <a href='javascript:;'>";
                    resultHtml5 += "        <div class='img_wrap'><img src='"+data.actorList[i].img+"' alt='이미지'>"+"</div>";
                    resultHtml5 += "        <div class='txt_wrap'><strong>"+data.actorList[i].nickname+"</strong><span>"+data.actorList[i].name+"</span></div>";
                    resultHtml5 += "    </a>"
                    resultHtml5 += "</div>";
                }
                resultHtml5 += "</div>";
                resultHtml5 += "<div class='swiper-pagination'></div>";
                $("#actorList").append(resultHtml5);
                 
                var swiper5 = new Swiper('.actor_area .swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    pagination: {
                    el: '.actor_area .swiper-pagination'
                    }
                });
            },
            error:function(){
                console.log("error!")
            }
        })
    }
  });