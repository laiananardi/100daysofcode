import random, string

#uniform
for i in range(5):
    print(random.uniform(1,6))

# randint
for i in range(5):
    print(random.randint(1,6))


friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']

# choice
print(random.choice(friends_list))
# sample
print(random.sample(friends_list,3))
# shuffle
random.shuffle(friends_list)
print(friends_list)


letters_numbers = string.ascii_letters + string.digits

print(letters_numbers)

letters_numbers = string.ascii_letters + string.digits

print(letters_numbers)

#   keys_base = list('abcdefghijklmnopqrstuvwxyz !')
#     random.shuffle(keys_base)
#     keys = ''.join(keys_base)
