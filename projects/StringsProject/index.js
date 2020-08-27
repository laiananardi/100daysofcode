

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");
const answer7 = document.querySelector("#answer7");

const name = document.querySelector("#word");

     function getNumberOfChars(name) {
        
        return name.length;
    }

     function getFirstChar(name) {
        
        return name[0];
    }

     function getLastChar(name) {
        
        return name[name.length -1];
    }

     function getLower(name) {
        
        return name.toLowerCase();
    }

     function getUpper(name) {
        
        return name.toUpperCase();
    }

     function getCapitalized(name) {
        
        return name[0].toUpperCase() + name.substring(1).toLowerCase();
    }

     function getClean(name) {
        
        return name.trim();
    }

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value){
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
    answer7.textContent = getClean(value);
});
