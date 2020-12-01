lista = [1,5,3,7,2]
dicionario = {'car':4,'dog':2,'add':3,'bee':1}

print(lista.sort()) #None
print(lista,'sort') #[1, 2, 3, 5, 7] sort
print(lista.reverse()) #None
print(lista,'reverse') #[7, 5, 3, 2, 1] reverse
print(list(reversed(lista))) #[1, 2, 3, 5, 7]
print(lista[::-1]) #[1, 2, 3, 5, 7]
print(sorted(lista)) #[1, 2, 3, 5, 7] ----cria uma nova lista 
print(sorted(dicionario))#['add', 'bee', 'car', 'dog']
print(sorted(dicionario.items()))#[('add', 3), ('bee', 1), ('car', 4), ('dog', 2)]
print(sorted(dicionario.values()))#[1, 2, 3, 4]
print(sorted(dicionario.values(), reverse=True))#[4, 3, 2, 1]

