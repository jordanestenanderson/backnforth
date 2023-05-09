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

$(document).ready(function(){
  $('.toggle-button').each(function(){
   var industryValue = $(this).attr('trigger');
   $(this).click(function(){
      $(".toggle-button, .industry-image, .industry-list").removeClass("active");
      $("." + industryValue).addClass("active");
   });
  });
});

$(".lightbox-close, .lightbox-scroller").click(function(){
   $("body, .lightbox, .overlay, .lightbox-content, .lightbox-step").removeClass("open");
});

document.getElementById("year").innerHTML = new Date().getFullYear();