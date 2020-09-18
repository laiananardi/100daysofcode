var viewer = document.querySelector("#viewer")
var equals = document.querySelector("#equals")
var nums = document.querySelectorAll(".num")
var ops = document.querySelectorAll(".ops")
var theNum = "";
var oldNum = "";
var resultNum;
var operator;

// // Shortcut to get elements
// var el = function (element) {
//   if (element.charAt(0) === "#") {
//     return document.querySelector(element);
//   }

//   return document.querySelectorAll(element);
// };

// var viewer = el("#viewer"),
//   equals = el("#equals"),
//   nums = el(".num"),
//   ops = el(".ops"),
//   theNum = "",
//   oldNum = "",
//   resultNum,
//   operator;

var setNum = function () {
  if (resultNum) {
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else {
    theNum += this.getAttribute("data-num");
  }

  viewer.innerHTML = theNum;

};

var moveNum = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.getAttribute("data-ops");

  equals.setAttribute("data-result", "");
};

var displayNum = function () {

  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  switch (operator) {
    case "plus":
      resultNum = oldNum + theNum;
      break;

    case "minus":
      resultNum = oldNum - theNum;
      break;

    case "times":
      resultNum = oldNum * theNum;
      break;

    case "divided by":
      resultNum = oldNum / theNum;
      break;

    default:
      resultNum = theNum;
  }


  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      //if it's NaN
      resultNum = "something wrong!"
    } else {
      //if it's infinity
      resultNum = "impossible!"
    }
  }

  viewer.innerHTML = resultNum;
  equals.setAttribute("data-result", resultNum);

  oldNum = 0;
  theNum = resultNum;

};

var clearAll = function () {
  oldNum = "";
  theNum = "";
  viewer.innerHTML = "0";
  equals.setAttribute("data-result", resultNum);
};

//Click events on JS code
for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = setNum;
}

for (var i = 0, l = ops.length; i < l; i++) {
  ops[i].onclick = moveNum;
}

equals.onclick = displayNum;

var clear = document.querySelector("#clear").onclick = clearAll;
//shortcut
// el("#clear").onclick = clearAll;



