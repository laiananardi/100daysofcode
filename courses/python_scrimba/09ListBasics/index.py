letters = ['a','b','c','d','e']

print(letters[1],letters[4])
print(letters[0:4])
print(len(letters))
print(letters.count('c'))
letters[2]='f'
print(letters)
letters.sort()
print(letters) 
letters.sort(reverse=True)
print(letters)

cars = [911,130,328,535,740,308]
print(min(cars))
print(max(cars))
print(sum(cars))



# b e
# ['a', 'b', 'c', 'd']
# 5
# 1
# ['a', 'b', 'f', 'd', 'e']
# ['a', 'b', 'd', 'e', 'f']
# ['f', 'e', 'd', 'b', 'a']
# 130
# 911
# 2952


