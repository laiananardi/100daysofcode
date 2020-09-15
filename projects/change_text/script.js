document.addEventListener('DOMContentLoaded', init);

        var i = 0;//start point
        var txt = ['Olá, mundo!', 'Hello, world!', 'Bonjour le monde!']
        var text = document.getElementById('text')
        var time = 1500;
        function init(){
            
            text.innerText= `${txt[i]}`
            
            if(i < txt.length -1){
                i++;
            } else{
                i = 0;
            }

            setTimeout("init()", time);   
        }
        