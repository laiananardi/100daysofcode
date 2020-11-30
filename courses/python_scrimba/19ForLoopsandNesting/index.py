for letra in 'Laiana Nardi':
    print(letra)

print("For loop letra!")

for contador in range(2,8):
    print(contador)

print("For Loop contador!")

friends = ['John','Terry','Eric','Michael','George']
# for friend in friends:
#     print(friend)

for index in range(len(friends)):
   print(friends[index])

for friend in friends:
    if friend == 'Eric':
        print('Found ' + friend + '!')
        break
        # continue
    print(friend)
    
for friend in friends:
    for number in [1,2,3]:
        print(friend, number)


print("For Loop friend done!")

