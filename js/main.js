var dot = $("#dot > ul > li")
var content = $("#fullpage > .section");
var app = $("#yogiyoApp2")

dot.click(function(e){
   e.preventDefault();
   var target = $(this);
   var index = target.index();
   var section = content.eq(index);
   var offset = section.offset().top;
   $("html, body").animate({scrollTop : offset}, 800);
});

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

   if(wScroll >= content.eq(0).offset().top){
      app.removeClass("show");
   } 
   if(wScroll >= content.eq(1).offset().top){
      app.removeClass("show");
      app.addClass("show");
   }
});
