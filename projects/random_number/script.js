  var button = document.getElementById("generateBtn");
  const min = document.getElementById("min");
  const max = document.getElementById("max");


  button.onclick = function generate() {
  var m = parseInt(min.value, 10);
  var n = parseInt(max.value, 10);
    
  var random = Math.floor(Math.random() * (n - m + 1) + m);

  var genNum = document.getElementById('genNum');
  genNum.innerHTML = random;
 }