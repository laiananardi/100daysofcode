
msg = input('Digite sua mensagem secreta: ')
mode = input('Para codificar sua mensagem digite(e) e para decodificar pressione enter: ')
key = input('Digite a chave que deseja utilizar para codificar ou decodificar (número inteiro)')


def enigma_light(msg,mode,key):
# criar a string alphabeto
    alphabet = 'abcdefghijklmnopqrstuvwyzàáãâéêóôõíúçABCDEFGHIJKLMNOPQRSTUVWYZÀÁÃÂÉÊÓÕÍÚÇ!'
# recriar os valores do alfabeto deslocando eles uma quantidade "key" de posições na string values
    values = ''
    for letter in alphabet:
        index = alphabet.find(letter)
        new_index = index + int(key)
        new_index = new_index % len(alphabet)
        values += alphabet[new_index:new_index+1]
        
# criar dois dicionarios
    #dicionário para codificar
    dict_e = dict(zip(alphabet,values))
    #dicionário para decodificar
    dict_d = dict(zip(values,alphabet)) 

# codificar ou decodificar
    if mode.lower() == 'e':
        new_msg = ''.join([dict_e[letter] for letter in msg.lower()])
    else:
        new_msg = ''.join([dict_d[letter] for letter in msg.lower()])
    
    return new_msg.capitalize()
# retorna o resultado


print(enigma_light(msg, mode, key))


# Digite sua mensagem secreta: Laiana
# Para codificar sua mensagem digite(e) e para decodificar pressione enter: e
# Digite a chave que deseja utilizar para codificar ou decodificar (número inteiro)3
# Odldqd

# Digite sua mensagem secreta: Odldqd
# Para codificar sua mensagem digite(e) e para decodificar pressione enter: 
# Digite a chave que deseja utilizar para codificar ou decodificar (número inteiro)3
# Laiana