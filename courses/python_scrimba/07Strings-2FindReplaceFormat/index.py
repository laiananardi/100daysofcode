
msg="""Dear Terry,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg)
# Dear Terry,
# You must cut down the mightiest
# tree in the forest with…
# a herring! <3

print(msg.find('Terry'))
# 5
print(msg.replace('Terry', 'Laiana'))
# Dear Laiana,
# You must cut down the mightiest
# tree in the forest with…
# a herring! <3
print('must' in msg)
# True
print('must' not in msg)
# False

name='TERRY'
color = 'RED'
msg1 = '[' + name + '] loves the color ' + color.lower() + '!'
msg2= f'[{name}] loves the color {color.lower()}!'
print(msg1)
print(msg2)
# [TERRY] loves the color red!
# [TERRY] loves the color red!