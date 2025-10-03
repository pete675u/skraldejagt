//Ctrl + Shift + R
function resetdivAppLab() {
  setStyle("divApplab", "width: 320px; height: 450px; display: block; left: 0px; top: 0px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);");
  setStyle("divApplab", "transform: initial");
  
  

}


function offSet() {
//  setStyle("divApplab", "position", "relative");
//  setStyle("divApplab", "top: 100vh");
//  setStyle("divApplab", "left: 100vh");
// setStyle("divApplab", "height: 53.56vh");
//  setStyle("divApplab", "width: 17.56w");
//  setStyle("divApplab", "width: 17.56w");
//  setStyle("divApplab", "aspect-ratio: 1000/2");
  setStyle("divApplab", "margin: 0");
  setStyle("divApplab", "position: absolute");
//100 = 5
//110 = 0
//120 = -5
  setStyle("divApplab", "top: 50%");
  setStyle("divApplab", "left: 50%");
//  setStyle("divApplab", "transform: scale(10)");
//  setStyle("divApplab", "transform: scale(1.3)");
//setStyle("divApplab", "transform-origin: 0 0");
  setStyle("divApplab", "transform: translate(-65%, -65%) scale(130%)");
//  setStyle("divApplab", "transform: translate(-25%, -25%)");
//  setStyle("divApplab", "transform: scale(50%)");
//  setStyle("divApplab", "scale: calc(50vw / 1920)");

  
  
}
function offSet2() {
  setStyle("divApplab", "display", "flex");
  setStyle("divApplab", "justify-content: center");
  setStyle("divApplab", "align-items: center");
  setStyle("divApplab", "text-align: center");
  setStyle("divApplab", "width: 30%");
}
resetdivAppLab();
offSet();
