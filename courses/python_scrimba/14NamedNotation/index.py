def mensagem(nome, idade=25, cor='red'):
    #Mensagem com o nome e a idade que o usuario inserir, utilizando idade=28 como default.
    print(f'Olá {nome.capitalize()}, você vai fazer {idade +1} anos no próximo aniversário!')
    print(f'Você gosta da cor {cor.lower()}!')

mensagem(nome='Laiana', idade=20, cor='rosa')

# Olá Laiana, você vai fazer 21 anos no próximo aniversário!
# Você gosta da cor rosa!