def mensagem(nome, idade=25):
    #Mensagem com o nome e a idade que o usuario inserir, utilizando idade=28 como default.
    print('Olá '  +  nome + ', you are ' + str(idade) +'!')
    print(f'Hello {nome}, you are {idade}!')

print('Seu nome: ')
nome = input()
print('Sua idade: ')
idade = input()
mensagem(nome, idade)


# 1. Add new print statement - on a new line
#    which says 'We hear you like the color xxx! xxx is a string with color 
# 2. extend the function with another  input parameter 'color', that defaults to 'red'
# 3. Capture the color via an input box as variable:color 
# 4. Change the 'You are xx!' text to say 'you will be xx+1 years old next birthday 
#  adding 1 to the age
# 5. Capitalize first letter of the 'name', and rest are small caps 
# 6. Favorite color should be in lowercase 
