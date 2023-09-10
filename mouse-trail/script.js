const pointer = document.querySelector(".pointer");
const trail = document.querySelector(".trail");

document.addEventListener("mousemove", (e) => {
  movePointer(e.clientX, e.clientY);
});

function movePointer(x, y) {
  pointer.style.left = x - pointer.offsetWidth / 2 + "px";
  pointer.style.top = y - pointer.offsetHeight / 2 + "px";

  trail.style.left = x - trail.offsetWidth / 2 + "px";
  trail.style.top = y - trail.offsetHeight / 2 + "px";
}
