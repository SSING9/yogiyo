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


$(document).ready(function(){
   /* 헤더, 요기요 app  fadeIn,fadeOut */
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

   /* 배경 이미지 랜덤 */
   var rnd = Math.random();
   var img1 = "images/mainimg1.png";
   var img2 = 'images/mainimg2.png';
   var img3 = 'images/mainimg3.png';
   var img4 = 'images/mainimg4.png';
   if (rnd <= 0.25) {
      $("#section1").css({"background" : "url(" + img1 + ") center no-repeat fixed", "background-size" : "cover"});
   } else if (rnd > 0.25 && rnd <= 0.5) {
      $("#section1").css({"background" : "url(" + img2 + ") center no-repeat fixed", "background-size" : "cover"});
   } else if (rnd > 0.5 && rnd <= 0.75) {
      $("#section1").css({"background" : "url(" + img3 + ") center no-repeat fixed", "background-size" : "cover"});
   } else {
      $("#section1").css({"background" : "url(" + img4 + ") center no-repeat fixed", "background-size" : "cover"});
   }
});


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

