const controller = new ScrollMagic.Controller();
// console.log(controller)
document.querySelectorAll(".block").forEach(element => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element.getElementsByTagName('div')[0],
    duration: '85%',
    triggerHook: 0.55,
    reverse: true,
  })
    .setClassToggle(element.getElementsByClassName('translate')[0], 'translate')
    .addTo(controller)
});

document.querySelectorAll(".block").forEach(element => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element.getElementsByTagName('div')[0],
    duration: '85%',
    triggerHook: 0.55,
    reverse: true,
  })
    .setClassToggle(element.getElementsByClassName('text1')[0], 'textAppear1')
    .addTo(controller)
});

document.querySelectorAll(".block").forEach(element => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element.getElementsByTagName('div')[0],
    duration: '85%',
    triggerHook: 0.55,
    reverse: true,
  })
    .setClassToggle(element.getElementsByClassName('text2')[0], 'textAppear2')
    .addTo(controller)
});

document.querySelectorAll(".block").forEach(element => {
  const ourScene = new ScrollMagic.Scene({
    triggerElement: element.getElementsByTagName('div')[0],
    duration: '85%',
    triggerHook: 0.55,
    reverse: true,
  })
    .setClassToggle(element.getElementsByTagName('div')[0], 'smoothAppear')
    .addTo(controller)
    .on('start', () => {
      const x1 = controller.info('scrollDirection');
      if (x1 == 'REVERSE') {
        element.getElementsByTagName('div')[0].classList.add("appear")
        element.getElementsByTagName('div')[0].classList.add("smoothDisappear")
      } else {
        if (element.getElementsByTagName('div')[0].classList.contains("smoothDisappear")) {
          element.getElementsByTagName('div')[0].classList.remove("smoothDisappear")
          element.getElementsByTagName('div')[0].classList.remove("appear")
        }
      }
    })
});
