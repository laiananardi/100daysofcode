filme = {
    'titulo' : 'Velozes e furiosos',
    'ano' : '2001',
    'elenco' : ['Dominic', 'Brian', 'Mia', 'Letty' ]
}
#ACESSANDO ITENS 
print(filme['titulo']) #Velozes e furiosos
print(filme.get('titulo')) #Velozes e furiosos
#acessando um item que não existe com um valor default 
print(filme.get('orçamento','not found')) #not found
#ADICIONANDO UM NOVO ITEM
filme['orçamento'] = '38 milhões'
print(filme.get('orçamento')) #38 milhões
#DELETANDO UM ITEM
del filme['elenco']
print(filme) #{'titulo': 'Velozes e furiosos', 'ano': '2001', 'orçamento': '38 milhões'}
ano = filme.pop('ano')
print(filme) #{'titulo': 'Velozes e furiosos', 'orçamento': '38 milhões'}
#comprimento do dicionario
print(len(filme)) #2
#Obtendo os valores keys, values and items
print(filme.keys()) #dict_keys(['titulo', 'orçamento'])
print(filme.values()) #dict_values(['Velozes e furiosos', '38 milhões'])
print(filme.items()) #dict_items([('titulo', 'Velozes e furiosos'), ('orçamento', '38 milhões')])