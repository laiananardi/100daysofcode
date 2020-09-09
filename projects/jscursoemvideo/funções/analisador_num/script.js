let num = document.querySelector('input#num')
let list = document.querySelector('select#list')
let ans = document.querySelector('div#ans')
let values = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function add(){
    if(isNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        caption.innerHTML = ''
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
    } else{
        window.alert('Valor inválido ou já adicionado a lista.')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if (values.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let tot = values.length
        let bigger = values[0]
        let smaller = values[0]
        let plus = 0
        let media = 0

        for(let pos in values){
            plus += values[pos]
            if(values[pos] > bigger)
            bigger = values[pos]
            if(values[pos] < smaller)
            smaller = values[pos] 
        }

        media = plus / tot

        ans.innerHTML = ''
        ans.innerHTML += `<p>Total de ${tot} números cadastrados </p>`
        ans.innerHTML += `<p>O maior valor é ${bigger} </p>`
        ans.innerHTML += `<p>O menor valor é ${smaller} </p>`
        ans.innerHTML += `<p>A soma de todos os valores é ${plus} </p>`
        ans.innerHTML += `<p>A média dos valores digitados é ${media} </p>`
        



        
    }
}