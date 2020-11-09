const fadeIn = document.getElementById('fadein');
const fadeOut = document.getElementById('fadeout');



function fadeOutEffect(id, time) {
    fadeOut.style.display = "none"
    fadeIn.style.display = "initial"
    target = document.getElementById(id);
    alpha = 100;
    timer = (time*2);
    var i = setInterval(
        function() {
          if (alpha <= 0)
            clearInterval(i);
          setAlpha(target, alpha);
          alpha -= 1;
        }, timer);
  }
  
  function fadeInEffect(id, time) {
    fadeOut.style.display = "initial"
    fadeIn.style.display = "none"
    target = document.getElementById(id);
    alpha = 0;
    timer = (time*2);
    var i = setInterval(
        function() {
          if (alpha >= 100)
            clearInterval(i);
          setAlpha(target, alpha);
          alpha += 1;
        }, timer);
  }
  
  function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
  }