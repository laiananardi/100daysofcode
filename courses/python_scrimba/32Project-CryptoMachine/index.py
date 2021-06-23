

def enigma_light():
# create keys string
    keys = 'abcdefghijklmnopqrstuvwxyz !'


# autogenerate the values string by offsetting original string
    values = keys[-1] + keys[0:-1]

# create two dictionaries
    dict_e = dict(zip(keys,values))
    dict_d = dict(zip(values,keys)) 

#user input 'the message' and mode
    msg = input('Enter your secret message quietly: ')
    mode = input('Crypto mode: encode (e) OR decrypt as default: ')
# run encode or decode
    if mode.lower() == 'e':
        new_msg = ''.join([dict_e[letter] for letter in msg.lower()])
    else:
        new_msg = ''.join([dict_d[letter] for letter in msg.lower()])
    
    return new_msg.capitalize()
# return result
# clean and beautify the code 

print(enigma_light())