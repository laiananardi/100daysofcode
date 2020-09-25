const time = document.querySelector('#time')
const timer = document.querySelector('#timer')
const btn = document.querySelector('#buttons')
var sessionInput = document.getElementById('session')
var breakInput = document.getElementById('break')

var seconds

var minSession
var minBreak

var minutstimer
var secondstimer

var toCount

function submit() {

    if (sessionInput.value == '' || breakInput.value == '') {
        alert('Please, fill all fields!')
    } else if(sessionInput.value > 60 || breakInput.value > 60 ){
        alert('Please, enter a number less than 60!')
    }else {
        display("submit", "start")
        minSession = Number(sessionInput.value)
        minBreak = Number(breakInput.value)
        timerSession();
    }
    sessionInput.style.display = "none" 
    breakInput.style.display = "none"

}

function display(first, second) {
    document.getElementById(first).style.display = "none"
    document.getElementById(second).style.display = "block"
}

function check(stat) {
    toCount = stat.value;
    if (stat.id == "start") {
        display("start", "stop")
    } else {
        refresh()
    }

}

function countSession() {
    if (seconds > 0) {
        if (toCount == true) {
            seconds--
            secondstimer = seconds % 60
            minutstimer = Math.floor(seconds / 60)

            if (secondstimer < 10) {
                secondstimer = "0" + secondstimer
            }

            if (minutstimer < 10) {
                minutstimer = "0" + minutstimer
            }

            time.innerHTML = minutstimer + " : " + secondstimer
        }
    }
    else {
        timerBreak()
    }
}
function countBreak() {
    if (seconds > 0) {
        if (toCount == true) {
            // seconds--    
            secondstimer = seconds % 60
            minutstimer = Math.floor(seconds / 60)

            if (secondstimer < 10) {
                secondstimer = "0" + secondstimer
            }

            if (minutstimer < 10) {
                minutstimer = "0" + minutstimer
            }

            time.innerHTML = minutstimer + " : " + secondstimer
        }
    }
    else {
        refresh()
    }
}


function timerSession() {
    seconds = minSession*60
    secondstimer = seconds % 60;
    minutstimer = Math.floor(seconds / 60);

    if (secondstimer < 10) {
        secondstimer = "0" + secondstimer
    }

    if (minutstimer < 10) {
        minutstimer = "0" + minutstimer
    }

    time.innerHTML = minutstimer + " : " + secondstimer
    setInterval(countSession, 1000)
}

function timerBreak() {
    
    timer.style.color = '#F25C5C'
    timer.style.borderColor = ' #F25C5C'

    seconds = minBreak*60
    secondstimer = seconds % 60;
    minutstimer = Math.floor(seconds / 60)

    if (secondstimer < 10) {
        secondstimer = "0" + secondstimer
    }

    if (minutstimer < 10) {
        minutstimer = "0" + minutstimer
    }

    time.innerHTML = minutstimer + " : " + secondstimer
    setInterval(countBreak, 1000)
}

function refresh() {
    document.location.reload();
}