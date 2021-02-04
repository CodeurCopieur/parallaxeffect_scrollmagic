$(document).ready(function () {

  //Init ScrollMagic
  var Controller = new ScrollMagic.Controller();

  var parallaxTl = new TimelineMax();
  parallaxTl
    .from('.content-wrapper', .4, {autoAlpha: 0, ease:Power0.easeNone}, .4)
    .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0);

  //Parallax Scene
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '200%'
  })
  .setTween(parallaxTl)
  .addTo(Controller);
})