const counter = document.querySelector('.counter');
const btn = document.querySelector('.buttons');
const secondsInput = document.getElementById('seconds');

var seconds;
var minutstimer;
var secondstimer;
var toCount;

function submit() {

    if (secondsInput.value == '') {
        alert('Please, enter a number!')
    } else {
        display("submit", "start");
        seconds = Number(secondsInput.value);
        secondsInput.style.display = "none";
        timer();
    }

}

function display(first, second) {
    document.getElementById(first).style.display = "none";
    document.getElementById(second).style.display = "block";
}

function check(stat) {
    toCount = stat.value;
    if (stat.id == "start") {
        display("start", "stop");
    }
    else if (stat.id == "stop") {
        display("stop", "continue");
    }
    else {
        display("continue", "stop");
    }

}

function count() {
    if (seconds > 0) {
        if (toCount == true) {
            seconds--;
            secondstimer = seconds % 60;
            minutstimer = Math.floor(seconds / 60);

            if (secondstimer < 10) {
                secondstimer = "0" + secondstimer;
            }

            if (minutstimer < 10) {
                minutstimer = "0" + minutstimer;
            }

            counter.innerHTML = minutstimer + " : " + secondstimer;
        }
    }
    else {
        counter.innerHTML = "Done!";
        display("stop", "refresh")
    }
}

function timer() {
    secondstimer = seconds % 60;
    minutstimer = Math.floor(seconds / 60);

    if (secondstimer < 10) {
        secondstimer = "0" + secondstimer;
    }

    if (minutstimer < 10) {
        minutstimer = "0" + minutstimer;
    }

    counter.innerHTML = minutstimer + " : " + secondstimer;
    setInterval(count, 1000);
}

function refresh() {
    document.location.reload();
}