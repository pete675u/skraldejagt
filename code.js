const box = document.getElementById("divApplab");

function resizeBox() {
  const width = window.innerWidth;   // get window width
  box.style.width = width + "px";    // set div width to match window
  console.log(box);
}

// Run on page load
resizeBox();

// Update when the window is resized
window.addEventListener("resize", resizeBox);
