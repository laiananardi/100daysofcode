print('Lambdas Exercise')

# def f(x): return x + 5
f = lambda x: x + 5
print(f(2))


print('Lambdas Exercise')


# def strip_spaces(str):
#    return ''.join(str.split(' '))
#write equivalent lambda and insert Lambda here
strip_spaces1 = lambda str: ''.join(str.split(' '))   
print(strip_spaces1('Monty Pythons Flying Circus')) 


print('Lambdas Exercise')

# def join_list_no_duplicates(list_a,list_b):
#    return list(set(list_a + list_b))
list_a = [1,2,3,4]
list_b = [3,4,5,6,7]
#write lambda below 
join_list_no_duplicates = lambda list_a, list_b : list(set(list_a + list_b))
print(join_list_no_duplicates(list_a,list_b))




print('Lambdas Exercise')

#Complete the function so it returns a function
def create_quad_func(a,b,c):
    # '''return function f(x) = ax^2 + bx + c'''
    return lambda x: a*x**2 + b*x + c
h = create_quad_func(2,4,6)
i = create_quad_func(1,2,3)
print(h(2))
print(i(2))


