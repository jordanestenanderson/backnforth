Barba.Pjax.start();
Barba.Prefetch.init()

var lastClickEl;

var transitionAnimation = Barba.BaseTransition.extend({
      
 start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    var transitionPromise = new Promise(function(resolve) {
     var outTransition = new TimelineMax();
      
        outTransition
                .set(".color-wipe", {display:"block", y: "100%"})
                
                .to(".color-wipe", 0.7, {y:"-100%", ease: Expo.easeOut}, 0)
        
                .fromTo(".loader", 0.4, { autoAlpha:0}, {delay:0.3, autoAlpha:1, ease: Expo.easeOut, onComplete: function() { resolve(); }}, 0)
        
                .to(".color-wipe", 0.7, {delay:0.2, y: "-200%", ease: Expo.easeIn})
                .set(".color-wipe", {delay:0.2, display:'none'})
    });
    return transitionPromise;
  },

    
 fadeIn: function() {
     $(window).scrollTop(0);
     
      var _this = this;
      var $el = $(this.newContainer);

      TweenMax.set($(this.oldContainer), { display: "none" });
      TweenMax.set($el, { visibility: "visible", opacity: 0 });
     
     
      TweenMax.fromTo(".loader", 0.7, { autoAlpha: 1}, { autoAlpha: 0, ease: Expo.easeIn});

      TweenMax.to($el, 0.1, {
          opacity: 1,
          onComplete: function() {
              _this.done();
              console.log("done");
          }
      }, 0);
  }
});

Barba.Pjax.getTransition = function() {
  return transitionAnimation;
};

let linkClicked = false
Barba.Dispatcher.on('linkClicked', (el) => {
    lastClickEl = el;
    linkClicked = true;
});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    BaseJS();
    $("html, .overlay, .burger").removeClass("open");
});

Barba.Dispatcher.on('initStateChange', () => {
  if (!linkClicked) {
    var hex = hueHistory.pop();
    var hex = hueHistory[hueHistory.length - 1];
    $("#wipe, .loader").css({background:hex});
  }
})

Barba.Dispatcher.on('transitionCompleted', () => {
  linkClicked = false
})
