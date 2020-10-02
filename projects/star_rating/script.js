const five = document.getElementById('five')
const four = document.getElementById('four')
const three = document.getElementById('three')
const two = document.getElementById('two')
const one = document.getElementById('one')

const list = [0, 1, 2, 3, 4]
var stars = JSON.parse(localStorage.getItem('stars')) || [];

list.forEach(function (element) {

    document.getElementById(element).addEventListener("click", function () {
        stars = []
        var cls = document.getElementById(element).className
        stars.push(element)
        localStorage.setItem('stars', JSON.stringify(stars))


        if (cls.includes("unchecked")) {
            for (i = 0; i <= element; i++) {

                document.getElementById(i).classList.remove("unchecked")
                document.getElementById(i).classList.add("checked")
            }
        } else {
            for (i = 4; i > element; i--) {

                document.getElementById(i).classList.remove("checked")
                document.getElementById(i).classList.add("unchecked")
            }
        }
    })

})

function showStars() {

    var star = document.getElementById(stars).className

    if (star.includes("unchecked")) {
        for (i = 0; i <= stars; i++) {

            document.getElementById(i).classList.remove("unchecked")
            document.getElementById(i).classList.add("checked")
        }
    } else {
        for (i = 4; i > stars; i--) {

            document.getElementById(i).classList.remove("checked")
            document.getElementById(i).classList.add("unchecked")
        }
    }


}