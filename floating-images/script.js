const imgArr = document.querySelectorAll(".img");
console.log(imgArr)

let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

const moveImage = (xA, yA) => {
  imgArr.forEach(img => {
    const moveStrength = 5 + (Math.random() * 15);
    img.style.left = img.offsetLeft - (xA / moveStrength) + "px"
    img.style.top = img.offsetTop - (yA / moveStrength) + "px"
  });
}



document.addEventListener("mousemove", (e) => {
  mousePos(e)
})

const mousePos = (e) => {
  moveXAmount = e.pageX - prevX;
  moveYAmount = e.pageY - prevY;

  moveImage(moveXAmount, moveYAmount);

  prevX = e.pageX;
  prevY = e.pageY;

}

