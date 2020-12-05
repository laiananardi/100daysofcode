try:
    num=int(input('Entre um número entre 1 e 30: '))
    div = 30/num
    if num > 30:
        raise ValueError(num)
except ZeroDivisionError as err:
    print(err, "Você não pode dividir por zero !!!")
except ValueError as err:
    print(err,num, "Valor não está entre 1 e 30!")
except:
    print("Input invalido!")
else:
    print("30 dividido por ",num, " é igual a: ", 30/num)
finally:
    print("**Obrigada por jogar!**")

#try:
    #codigo que você quer rodas
#except:
    #executado se acontecer um erro
#else:
    #executado se não houver erro
#finally:
    #sempre é executado

