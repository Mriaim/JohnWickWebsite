
  function OpenLog() {

    document.getElementById("mySidenav").style.width = "100vw";
  }

  function CloseLog() {
    document.getElementById("mySidenav").style.width = "0vw";
  }


var modal = document.getElementById("Modal");
var img = document.getElementById("photo");
var text = document.getElementById("caption");
function Show(z){
  modal.style.display = "block";
  img.src = z.src;
  text.innerHTML = z.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
  