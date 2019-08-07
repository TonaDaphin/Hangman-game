function showhappy() {
  document.getElementById("myhDiv").style.display="block";
  setTimeout("hideh()", 2000);  // 2 seconds
}

function hideh() {
  document.getElementById("myhDiv").style.display="none";
}

function showsad() {
  document.getElementById("mysDiv").style.display="block";
  setTimeout("hides()", 2000);  // 2 seconds
}

function hides() {
  document.getElementById("mysDiv").style.display="none";
}