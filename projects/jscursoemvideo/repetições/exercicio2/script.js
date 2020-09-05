function tabuada(){
    const num = document.getElementById('num')
    const tab = document.getElementById('tab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        const n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while(c <= 10){
            const item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}