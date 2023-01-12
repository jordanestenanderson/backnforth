AOS.init({
  	duration: 1000,
    easing: 'ease-out-quad',
    once: true,
})

$(document).ready(function(){
  $('.step-graphic').each(function(){
   var triggerValue = $(this).attr('trigger');
   $(this).click(function(){
      $("body, .lightbox, .overlay, .lightbox-content").addClass("open");
      $("." + triggerValue).addClass("open");
   });
  });
});

$(".lightbox-close, .lightbox-scroller").click(function(){
   $("body, .lightbox, .overlay, .lightbox-content, .lightbox-step").removeClass("open");
});

document.getElementById("year").innerHTML = new Date().getFullYear();