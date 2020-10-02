const satisfactions = document.getElementsByClassName('satisfactions')[0]


const list = [0, 1, 2, 3, 4]
var stars = JSON.parse(localStorage.getItem('stars')) || [];
var star = document.getElementById(stars).className


list.forEach(function (element) {

    document.getElementById(element).addEventListener("click", function () {
        stars = []
        stars.push(element)
        localStorage.setItem('stars', JSON.stringify(stars))
        star = document.getElementById(element).className
    
        
        showStars()
    

    })

})

function showSatisfactions() {
    //satisfactions
    if (stars == 4) {

        satisfactions.innerHTML = `<div class="satisfaction" id="five">
                                        <p>Ótimo!</p>
                                        <i class="fas fa-laugh-squint"></i>
                                    </div>`
    


    } else if (stars == 3) {

        satisfactions.innerHTML = `<div class="satisfaction" id="four">
                                        <p>Bom!</p>
                                        <i class="fas fa-smile-beam"></i>
                                    </div>`
       

    } else if (stars == 2) {

        satisfactions.innerHTML = `<div class="satisfaction" id="three">
                                        <p>Regular!</p>
                                        <i class="fas fa-meh"></i>
                                    </div>`

    } else if (stars == 1) {

        satisfactions.innerHTML = `<div class="satisfaction" id="two">
                                        <p>Ruim!</p>
                                        <i class="fas fa-frown"></i>
                                    </div>`

    } else {

        satisfactions.innerHTML = `<div class="satisfaction" id="one">
                                        <p>Péssimo!</p>
                                        <i class="fas fa-angry"></i>
                                    </div>`

    }

}


function showStars() {
    
    if (star.includes("unchecked")) {
        for (i = 0; i <= stars; i++) {
            
            document.getElementById(i).classList.add("checked")
            document.getElementById(i).classList.remove("unchecked")
            
        }
    } else {
        for (i = 4; i > stars; i--) {

            document.getElementById(i).classList.remove("checked")
            document.getElementById(i).classList.add("unchecked")
        }
    }
    showSatisfactions()

}
