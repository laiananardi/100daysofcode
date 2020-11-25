def mensagem(nome, idade=25, cor='red'):
    #Mensagem com o nome e a idade que o usuario inserir, utilizando idade=28 como default.
    # print('Olá '  +  nome.capitalize() + ', você vai fazer ' + str(idade+1) +' anos no próximo aniversário!')
    print(f'Olá {nome.capitalize()}, você vai fazer {idade +1} anos no próximo aniversário!')
    print(f'Você gosta da cor {cor.lower()}!')

print('Seu nome: ')
nome = input()
print('Sua idade: ')
idade = input()
print('Sua cor favorita:')
cor = input()
mensagem(nome, int(idade), cor)


# 1. Adicione uma nova declaração print em uma nova linha
#    Que diga 'Você gosta da cor xxx! xxx é uma string com a cor.
# 2. Estenda a função com outro parâmetro de entrada 'cor', com um vlaor default 'red'
# 3. Capture a cor por meio de uma caixa de entrada, input como variável: cor
# 4. Mude o texto 'você tem x anos' para você 'vai fazer x anos no proximo aniversário'. 
#  adicionando 1 a idade
# 5. Capitalize a primeira letra do nome.
# 6. A cor favorita deve estar em caixa baixa.
