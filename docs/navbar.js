
var isToggle = false;

let menuBar = document.querySelector('.nav1');

function toggling() {

  if(isToggle == false) {

    menuBar.style.display = "block";
    isToggle = true;
  } else {
    menuBar.style.display = "none";
    isToggle = false;
  }
}

document.querySelector('.menu1').addEventListener('click', toggling);

