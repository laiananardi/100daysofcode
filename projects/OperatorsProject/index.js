function calcular() {
    var num1 = parseInt(document.getElementById('num1').value, 10);
    var num2 = parseInt(document.getElementById('num2').value, 10);

    document.getElementById('answer1').innerHTML = num1 + num2;

    document.getElementById('answer2').innerHTML = num1 - num2;

    document.getElementById('answer3').innerHTML = num1 * num2;

    document.getElementById('answer4').innerHTML = num1 / num2;

    document.getElementById('answer5').innerHTML = num1 % num2;

    document.getElementById('answer6').innerHTML = num1 ** num2;
    
  }