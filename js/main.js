var dot = $("#dot > ul > li")
var content = $("#fullpage > .section");
var app = $("#yogiyoApp2")

/* 닷 클릭시 페이지 이동 */
dot.click(function(e){
   e.preventDefault();
   var target = $(this);
   var index = target.index();
   var section = content.eq(index);
   var offset = section.offset().top;
   $("html, body").animate({scrollTop : offset}, 800);
});

/* 닷 클릭시 닷 이미지 변경 */
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

   if(wScroll >= content.eq(0).offset().top){
      dot.removeClass("active");
      dot.eq(0).addClass("active");
   }
   if(wScroll >= content.eq(1).offset().top){
      dot.removeClass("active");
      dot.eq(1).addClass("active");
   }
   if(wScroll >= content.eq(2).offset().top){
      dot.removeClass("active");
      dot.eq(2).addClass("active");
   }
   if(wScroll >= content.eq(3).offset().top){
      dot.removeClass("active");
      dot.eq(3).addClass("active");
   }
   if(wScroll >= content.eq(4).offset().top){
      dot.removeClass("active");
      dot.eq(4).addClass("active");
   }
});

/* 헤더, 요기요 app */
$(document).ready(function(){
   $("#yogiyoApp2").hide();
   $(window).scroll(function(){
      var wScroll = $(this).scrollTop();

      if(wScroll >= (content.eq(1).offset().top)-(wScroll/3)){
         $('#yogiyoApp2').fadeIn(300);
      } else {
         $('#yogiyoApp2').fadeOut(300);
      }

      if(wScroll >= (content.eq(4).offset().top)-(wScroll/7)){
         $("h1, #sns").fadeOut(250);
      } else{
         $("h1, #sns").fadeIn(300);
      }
   });
});

/* 배경 이미지 랜덤 */

function backImg() {
   var rnd = Math.random();
   if (rnd <= 0.25) {
      $(".backImg > img").attr("src", "images/mainimg1.png");
   } else if (rnd > 0.25 && rnd <= 0.5) {
      $(".backImg > img").attr("src", "images/mainimg2.png");
   } else if (rnd > 0.5 && rnd <= 0.75) {
      $(".backImg > img").attr("src", "images/mainimg3.png");
   } else {
      $(".backImg > img").attr("src", "images/mainimg4.png");
   }
}

backImg();

/* 마우스 휠 이벤트 */

var scrollEvent = false;
var count = 0;
$("html, body").on("mousewheel", function(e){
   e.preventDefault();
   var event = e.originalEvent.wheelDelta;
   var wHeight = $("#section1").height();

   if(event > 1 && scrollEvent == false && count >=1 ){
      
      scrollEvent = true;
      count--;
      $("html,body").stop().animate({scrollTop:wHeight*count},
         {duration:800, complete : function(){scrollEvent = false;}});
   } else if (event < 1 && scrollEvent == false && count < 4){
      
      scrollEvent = true;
      count++;
      $("html,body").stop().animate({scrollTop:wHeight*count},
         {duration:800, complete : function(){scrollEvent = false;}});
   }
});
