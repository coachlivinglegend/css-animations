const controller = new ScrollMagic.Controller();

const parallaxIntro = new ScrollMagic.Scene({
  triggerElement: '.title',
  triggerHook: 0,
  duration: '100%'
})
  .setTween(TweenMax.to('.title', 1, { y: '-100px' }))
  .addTo(controller)

const parallaxBlank = new ScrollMagic.Scene({
  triggerElement: '.blank',
  triggerHook: 0.9,
  duration: '100%'
})
  .setTween(TweenMax.to('.blank', 1, { height: '5vh' }))
  .addTo(controller)

const parallaxFirstNumber = new ScrollMagic.Scene({
  triggerElement: '.firstNumber',
  triggerHook: 0.8,
  duration: '100%'
})
  .setTween(TweenMax.to('.firstNumber', 1, { top: '15%' }))
  .addTo(controller)

const parallaxFirstImg = new ScrollMagic.Scene({
  triggerElement: '.firstImg',
  triggerHook: 0.7,
  duration: '100%'
})
  .setTween(TweenMax.to('.firstImg', 1, { top: '-100px' }))
  .addTo(controller)

const parallaxFirstTitle = new ScrollMagic.Scene({
  triggerElement: '.firstTitle',
  triggerHook: 0.9,
  duration: '100%'
})
  .setTween(TweenMax.to('.firstTitle', 1, { top: '-300px' }))
  .addTo(controller)

const parallaxSecondNumber = new ScrollMagic.Scene({
  triggerElement: '.secondNumber',
  triggerHook: 0.8,
  duration: '100%'
})
  .setTween(TweenMax.to('.secondNumber', 1, { top: '-100px' }))
  .addTo(controller)

const parallaxSecondImg = new ScrollMagic.Scene({
  triggerElement: '.second',
  triggerHook: 0.6,
  duration: '100%'
})
  .setTween(TweenMax.to('.second', 1, { backgroundPositionY: '10%' }))
  .addTo(controller)

const pinFooter = new ScrollMagic.Scene({
  triggerElement: '.second',
  triggerHook: 0.2,
  duration: '120%'
})
  .setPin('.footerContainer')
  .addTo(controller)

