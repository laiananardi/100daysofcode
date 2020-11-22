# The split() method splits a string into a list.
# syntax: string.split(separator, maxsplit)

msg ='Welcome  to  Python  101: Split  and Join'
csv = 'Eric,John,Michael,Terry,Graham'
friends_list = ['Eric','John','Michael','Terry','Graham']
print(msg.split())
print(msg.split(' '), type(msg.split(' ')))

print(csv.split(','))
print(csv.split(",", 1))


# The join() method takes all items in an iterable and joins them into one string.
# A string must be specified as the separator.

print(', '.join(friends_list))
print(''.join(msg.split()))