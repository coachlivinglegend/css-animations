// const indexArray = (new Array(6)).fill
const indexArray = [1, 2, 3, 4, 5, 6];
const imgArr = document.querySelectorAll(".img");

const manageIndex = (mousePosX, mousePosY) => {
  let pageWidth = document.documentElement.clientWidth;
  if (mousePosX < pageWidth * 0.15) {
    imgArr[0].style.zIndex = indexArray[0];
    imgArr[1].style.zIndex = indexArray[1];
    imgArr[2].style.zIndex = indexArray[2];
    imgArr[3].style.zIndex = indexArray[3];
    imgArr[4].style.zIndex = indexArray[4];
    imgArr[5].style.zIndex = indexArray[5];
  }
  if (mousePosX < pageWidth * 0.30 && mousePosX > pageWidth * 0.15) {
    imgArr[0].style.zIndex = indexArray[5];
    imgArr[1].style.zIndex = indexArray[0];
    imgArr[2].style.zIndex = indexArray[1];
    imgArr[3].style.zIndex = indexArray[2];
    imgArr[4].style.zIndex = indexArray[3];
    imgArr[5].style.zIndex = indexArray[4];

  }
  if (mousePosX < pageWidth * 0.45 && mousePosX > pageWidth * 0.30) {
    imgArr[0].style.zIndex = indexArray[4];
    imgArr[1].style.zIndex = indexArray[5];
    imgArr[2].style.zIndex = indexArray[0];
    imgArr[3].style.zIndex = indexArray[1];
    imgArr[4].style.zIndex = indexArray[2];
    imgArr[5].style.zIndex = indexArray[3];

  }
  if (mousePosX < pageWidth * 0.60 && mousePosX > pageWidth * 0.45) {
    imgArr[0].style.zIndex = indexArray[3];
    imgArr[1].style.zIndex = indexArray[4];
    imgArr[2].style.zIndex = indexArray[5];
    imgArr[3].style.zIndex = indexArray[0];
    imgArr[4].style.zIndex = indexArray[1];
    imgArr[5].style.zIndex = indexArray[2];

  }
  if (mousePosX < pageWidth * 0.75 && mousePosX > pageWidth * 0.60) {
    imgArr[0].style.zIndex = indexArray[2];
    imgArr[1].style.zIndex = indexArray[3];
    imgArr[2].style.zIndex = indexArray[4];
    imgArr[3].style.zIndex = indexArray[5];
    imgArr[4].style.zIndex = indexArray[0];
    imgArr[5].style.zIndex = indexArray[1];

  }
  if (mousePosX < pageWidth * 0.90 && mousePosX > pageWidth * 0.75) {
    imgArr[0].style.zIndex = indexArray[1];
    imgArr[1].style.zIndex = indexArray[2];
    imgArr[2].style.zIndex = indexArray[3];
    imgArr[3].style.zIndex = indexArray[4];
    imgArr[4].style.zIndex = indexArray[5];
    imgArr[5].style.zIndex = indexArray[0];

  }
  if (mousePosX > pageWidth * 0.90) {
    imgArr[0].style.zIndex = indexArray[0];
    imgArr[1].style.zIndex = indexArray[1];
    imgArr[2].style.zIndex = indexArray[2];
    imgArr[3].style.zIndex = indexArray[3];
    imgArr[4].style.zIndex = indexArray[4];
    imgArr[5].style.zIndex = indexArray[5];
  }
}

const moveImg = (mousePosX, mousePosY) => {
  for (let i = 1; i < indexArray.length + 1; i++) {
    for (let j = 0; j < imgArr.length; j++) {
      if (imgArr[j].style.zIndex == i) {
        // TweenMax.to(imgArr[i], 0.2, { left: mousePosX })
        TweenMax.to(imgArr[j], 0.2, { left: mousePosX - (imgArr[j].getBoundingClientRect().width * (0.4 + (i * 0.03))), delay: (j * 0.2) + 0.1 })
        TweenMax.to(imgArr[j], 0.2, { top: mousePosY - (imgArr[j].getBoundingClientRect().height * (0.4 + (i * 0.03))), delay: (j * 0.2) + 0.1 })
      }
    }
  }

  manageIndex(mousePosX, mousePosY);
}



const detectMouse = () => {
  document.addEventListener("mousemove", (e) => {
    const mousePosX = e.clientX;
    const mousePosY = e.clientY;
    moveImg(mousePosX, mousePosY);
    for (let i = 0; i < imgArr.length; i++) {
      console.log(imgArr[i].className, imgArr[i].style.left)
    }
  })
}

imgArr.forEach((image, i) => {
  image.style.zIndex = indexArray[i];
  detectMouse()
})

