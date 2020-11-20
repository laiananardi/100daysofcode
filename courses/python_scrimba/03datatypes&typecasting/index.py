# float
failed_subjects=2.45  
# string
name='John'
a="it's"
b='it\'s'
# Boolean
Boolean True or False


# find out the type
print(type('hello'))
print(type(1))
print(type(1.64))
print(type(True))
# output:
# ›<class 'str'>
# ›<class 'int'>
# ›<class 'float'>
# ›<class 'bool'>

# casting
# examples

a = int(1)        # a will be 1
b = int(2.5)      # b will be 2
c = int("3")      # c will be 3
c1 = int(float("3.4"))   # c1 will be...
d = float(1)      # d will be 1.0
e = float(2.5)    # e will be 2.5
f = float("3")    # f will be 3.0
g = float("4.23") # g will be 4.23
h = str("80s")    # h will be '80s'
i = str(22)       # i will be '22'
j = str(3.01)     # j will be '3.01'

print([a,b,c,d,e,f,g,h,i,j])

# output:
# [1, 2, 3, 3, 1.0, 2.5, 3.0, 4.23, '80s', '22', '3.01']
