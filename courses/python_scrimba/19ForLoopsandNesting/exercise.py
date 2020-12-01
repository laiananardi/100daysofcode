# names = ['john ClEEse','Eric IDLE','michael']
# names1 = ['graHam chapman', 'TERRY', 'terry jones']
# msg = 'You are invited to the party on saturday.'
# #names.extend(names1)
# names += names1
# for index in range(2):
#     names.append(input('Enter a new name: '))

# for name in names:
#     #msg1 = f'{name.title()}! {msg}'
#     msg1 = name.title() + '! ' + msg
#     print(msg1)

#Imprima convites para uma festa utilizando o for loops
#Os nomes estão em duas listas (nomes e nome1)
#Adicione também mais 2 nomes extras a lista utilizando um input box quando você rodas o código
#Imprima um convite  para cada amigo 
#Os nomes devem estar capitalizados
nomes = ['joão','luana','michael']
nomes1 = ['Maria', 'GABRIELA', 'laiAna']
convite = 'Você está convidado para a festa sábado a noite.'

nomes.extend(nomes1)
for index in range(2):
    nomes.append(input('Enter a new nome: '))

for nome in nomes:
    convite1 = f'{nome.title()}! {convite}'
    print(convite1)

