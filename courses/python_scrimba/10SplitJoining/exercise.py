csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
friends_list = []
# print(friends_list)
# From the list above fill a list(friends_list) properly
# with the names of all the friends. One per "slot"
# you may need to run same command several times
# use print() statements to work your way through the exercise


# SPLIT AND JOIN
# friends_list.extend((','.join(','.join(csv.split(';')).split(':'))).split(','))
# print(friends_list) #['Eric', 'John', 'Michael', 'Terry', 'Graham', 'TerryG', 'Brian']

# REPLACE
friends_list.extend(csv.replace(';',',').replace(':',',').split(','))
print(friends_list) #['Eric', 'John', 'Michael', 'Terry', 'Graham', 'TerryG', 'Brian']