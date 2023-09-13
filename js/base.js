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
 
$(".video-overlay").click(function(){
   $("body, .lightbox, .overlay, .lightbox-content, .lightbox-step").addClass("open");
   $(".lightbox-step iframe").attr("src", "https://player.vimeo.com/video/863375235?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1");
});

$(".lightbox-close, .lightbox-scroller").click(function(){
   $("body, .lightbox, .overlay, .lightbox-content, .lightbox-step").removeClass("open");
   $(".lightbox-step iframe").attr("src", "https://player.vimeo.com/video/863375235?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479");
});

document.getElementById("year").innerHTML = new Date().getFullYear();