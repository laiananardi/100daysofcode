const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const startbtn = document.querySelector(".start")
const lap = document.querySelector(".lap")
const stop = document.querySelector(".stop")
const returnbtn = document.querySelector(".return")
const reset = document.querySelector(".reset")
const laps = document.querySelector(".laps")

let hh = 0
    mm = 0
    ss = 0

var stopwatch;

startbtn.addEventListener("click", start)

function start() {
    startbtn.style.display = "none";
    lap.style.display = "inline-block";
    stop.style.display = "inline-block";
    reset.style.display = "inline-block";

    stopwatch = setInterval(() => {
        ss++;
        if (ss == 60) {
            ss = 0
            mm++
        }
        if (mm == 60) {
            mm = 0
            hh++
        }
        if (hh <= 9) hours.innerText = "0" + hh + " : "
        else hours.innerText = hh + " : "
        if (mm <= 9) minutes.innerText = "0" + mm + " : "
        else minutes.innerText = mm + " : "
        if (ss <= 9) seconds.innerText = "0" + ss
        else seconds.innerText = ss
    }, 1000)
}

lap.addEventListener("click", () => {
    const lap = document.createElement("div")
    lap.innerHTML = `<p>${hh} : ${mm} : ${ss}</p>`
    laps.appendChild(lap);
})

stop.addEventListener("click", () => {

    clearInterval(stopwatch)
    stop.style.display = "none"
    returnbtn.style.display = "inline-block"
    


})

returnbtn.addEventListener("click", () => {
    start()
    stop.style.display = "inline-block"
    returnbtn.style.display = "none"

})


reset.addEventListener("click", () => {
    lap.style.display = "none"
    stop.style.display = "none"
    returnbtn.style.display = "none"
    reset.style.display = "none"
    startbtn.style.display = "inline-block"

    clearInterval(stopwatch)



    hours.innerText = "00 : "
    minutes.innerText = "00 : "
    seconds.innerText = "00"

    hh = 0
    mm = 0
    ss = 0

    laps.innerHTML = "<h2>Laps:</h2>"
})