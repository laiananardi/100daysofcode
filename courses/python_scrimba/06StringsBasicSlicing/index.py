msg='welcome to Python 101: Strings'
print(msg*2)
print(msg+msg)
# welcome to Python 101: Stringswelcome to Python 101: Strings
# welcome to Python 101: Stringswelcome to Python 101: Strings
print(msg,msg)
# welcome to Python 101: Strings welcome to Python 101: Strings
print(msg.upper())
print(msg.lower())
print(msg.capitalize())
print(msg.title())
# WELCOME TO PYTHON 101: STRINGS
# welcome to python 101: strings
# Welcome to python 101: strings
# Welcome To Python 101: Strings
print(len(msg))
print(msg.count('o'))
# 30
# 3

#SLICING
print(msg[0:7])
print(msg[-7:])
print(msg[-1])
# welcome
# Strings
# s

string = "Welcome to Python!"

print(string,string) #Welcome to Python! Welcome to Python! 
print(string.upper()) #WELCOME TO PYTHON! - transforma a string para caixa alta
print(string.lower()) #welcome to python! -transforma a string para caixa baixa
print(string.capitalize()) #Welcome to python! -capitaliza apenas a primeira palavra-
print(string.title()) #Welcome To Python! -capitaliza todas as palavras da string-
print(len(string)) #18 -tamanho-
print(string.count('o')) #3 -quantidade de vezes que a letra o aparece na string-
print(string[-7:-1]) #Python -slicing-
print(string.find('Python')) #11 -mostra a posição-
print(string.replace('Python', 'Java')) #Welcome to Java!
