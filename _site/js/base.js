$(".burger-wrap").click(function(){
  $("html, .overlay, .burger").toggleClass("open");
});

function BaseJS() {
	AOS.init({
	  	duration: 1000,
	    easing: 'ease-out-quad',
	    once: true,
	})

	document.getElementById("year").innerHTML = new Date().getFullYear();
}
BaseJS();