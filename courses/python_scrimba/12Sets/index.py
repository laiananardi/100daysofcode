#Sets - blazingly fast unordered Lists 
friends = ['John','Michael','Terry','Eric','Graham']
friends_tuple = ('John','Michael','Terry','Eric','Graham')
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}

my_friends_set = {'Reg','Loretta','Colin','Eric','Graham'}

print(friends_set.intersection(my_friends_set))
# {'Graham', 'Eric'}

print(friends_set.difference(my_friends_set))
# {'Terry', 'John', 'Michael'}

print(friends)
print(friends_tuple)
print(friends_set) 
# ['John', 'Michael', 'Terry', 'Eric', 'Graham']
# ('John', 'Michael', 'Terry', 'Eric', 'Graham')
# {'Terry', 'John', 'Eric', 'Michael', 'Graham'} 



#Sets - blazingly fast unordered Lists 
#empty Lists
empty_list = []
empyt_list = list()

#empty Tuple
empty_tuple = ()
empty_tuple = tuple()

#empty Set
empty_set = {} # this is wrong, this is a dictionary
empty_set = set()

