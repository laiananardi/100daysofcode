document.addEventListener('DOMContentLoaded', init);

var i = 0;//start point
// TEXT CHANGING to use on the mobile form
// var txt2 = []
// var txt3 = []

var text2 = document.getElementsByTagName('h2')[0]
var text3 = document.getElementsByTagName('h3')[0]
var img = []
var time = 3000;

img.push('img/img1.png')
img.push('img/img2.png')


// txt2.push('Fácil e Ágil')
// txt2.push('Cuidados para pet')
// txt2.push('Atendimento personalizado')

// txt3.push('Encontramos o veterinário mais próximo de você.')
// txt3.push('Atendimento Veterinário, Banho e Tosa e Adestramento.')
// txt3.push('O veterinário vai até sua casa.')
function init(){
    
    // text2.innerText= `${txt2[i]}`
    // text3.innerText= `${txt3[i]}`
    document.image.src = img[i]
            
    if(i < img.length -1){
    	i++;
    } else{
    	i = 0;
    }

    setTimeout("init()", time);   
}