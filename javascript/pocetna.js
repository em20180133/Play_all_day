var mybutton = document.getElementById("vrh");

window.onscroll = function() {funkc1()};

function funkc1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function funkc2() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}