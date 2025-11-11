const content = document.getElementById('content')
const checkBox = document.getElementById("reverseCheck");

function doomShake() {
  if (checkBox.checked == true){
    content.classList.add("shake");
    content.style.display = "none";
  } else {
     
  }
}