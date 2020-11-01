  var button = document.getElementById("generateBtn");

  button.onclick = function generate() {

  var random = Math.floor((Math.random() * 100) + 1);

  var genNum = document.getElementById('genNum');
  genNum.innerHTML = random;
 }