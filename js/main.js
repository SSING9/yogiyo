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

      if(wScroll >= content.eq(1).offset().top){
         $('#yogiyoApp2').fadeIn(300);
      } else {
         $('#yogiyoApp2').fadeOut(300);
      }

      if(wScroll >= content.eq(4).offset().top){
         $("h1, #sns").fadeOut(250);
      } else{
         $("h1, #sns").fadeIn(300);
      }
   });
});

$(document).ready(function(){
   $(".topBtns").hide();
   $(window).scroll(function() {
      var wScroll = $(window).scrollTop();
      if (wScroll >= content.eq(4).offset().top) {
        $('.topBtns').fadeIn(500);
      } else {
        $('.topBtns').fadeOut(500);
      }
    });
   $(".topBtns").click(function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop : $(this.hash).offset().top
      }, 700);
    });
});
