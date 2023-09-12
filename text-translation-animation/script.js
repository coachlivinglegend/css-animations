const controller = new ScrollMagic.Controller();

document.querySelectorAll(".text").forEach((element, i) => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element,
    duration: '85%',
    triggerHook: 0.9,
    reverse: true,
  })
    .on('start', () => {
      TweenMax.to(element, 1, { left: 0, opacity: 1 })
    })
    .on('end', () => {
      const x1 = controller.info("scrollDirection");
      TweenMax.to(element, 1, { left: "-20%", opacity: 0 })
      if (x1 == "REVERSE") {
        TweenMax.to(element, 1, { left: 0, opacity: 1 })
      }
    })
    .addTo(controller)
});

document.querySelectorAll(".textBlock").forEach((element, i) => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element,
    duration: '100%',
    triggerHook: 0.5,
    reverse: true,
  })
    .on('start', () => {
      TweenMax.to(element, 1, { left: 0, opacity: 1 })
    })
    .on('end', () => {
      const x1 = controller.info("scrollDirection");
      TweenMax.to(element, 1, { left: "-20%", opacity: 0 })
      if (x1 == "REVERSE") {
        TweenMax.to(element, 1, { left: 0, opacity: 1 })
      }
    })
    .addTo(controller)
});

