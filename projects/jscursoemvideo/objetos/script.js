let amigo = {
    nome: 'Laiana',
    sexo: 'Feminino',
    peso: 55,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)