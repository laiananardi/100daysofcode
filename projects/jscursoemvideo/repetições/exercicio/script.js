function count (){
    const beg = document.getElementById('beggining')
    const end = document.getElementById('end')
    const pat = document.getElementById('pattern')
    const ans = document.getElementById('ans')

    if(beg.value.length == 0 || end.value.length == 0 || pat.value.length == 0){
        //se não preencher algum valor
        window.alert('Faltam dados!')
    }else{
        ans.innerHTML = `contando: <br>`
        const b = Number(beg.value)
        const e = Number(end.value)
        const p = Number(pat.value)
        if (p <= 0) {
            window.alert('Passo inválido! Consideranod passo = 1')
            p = 1
        }
        if (b < e) {
            //contagem crescente
            for(let c = b; c <= e; c += p){
                ans.innerHTML += `${c} `
            }
        }else{
            //contagem decrescente
            for(let c = b; c >= e; c -= p){
                ans.innerHTML += `${c} `
            }
        }
    }
}

