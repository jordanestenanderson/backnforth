var hueHistory = ['#1b1b1b'];

$(".burger-wrap").click(function(){
  $("html, .overlay, .burger").toggleClass("open");
});

function BaseJS() {
	$(document).on("click",".loader-link",function() {
        var hex = $(this).data('hue');
        hueHistory.push(hex);
		console.log(hueHistory);
        $("#wipe, .loader").css({background:hex});
	});

	AOS.init({
	  	duration: 1000,
	    easing: 'ease-out-quad',
	    once: true,
	})

	document.getElementById("year").innerHTML = new Date().getFullYear();
}
BaseJS();