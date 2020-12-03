movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
print(movie['title']) #Life of Brian
#print(movie['budget']) #KeyError: 'budget'
print(movie.get('budget')) #None
print(movie.get('budget','not found')) #not found ---default value 

movie['title'] = 'The Holy Grail'
print(movie.get('title')) #The Holy Grail

movie['budget'] = 250000
print(movie.get('budget')) #250000

# del movie['year']
year = movie.pop('year')
print(movie) #{'title': 'The Holy Grail', 'cast': ['John', 'Eric', 'Michael', 'George', 'Terry'], 'budget': 250000}
print(year) #1979

print(len(movie)) #3
print(movie.keys()) #dict_keys(['title', 'cast', 'budget'])
print(movie.values()) #dict_values(['The Holy Grail', ['John', 'Eric', 'Michael', 'George', 'Terry'], 250000])
print(movie.items()) #dict_items([('title', 'The Holy Grail'), ('cast', ['John', 'Eric', 'Michael', 'George', 'Terry']), ('budget', 250000)
for key in movie:
    print(key)
# title
# cast
# budget

for key, value in movie.items():
    print(key, value)
# title The Holy Grail
# cast ['John', 'Eric', 'Michael', 'George', 'Terry']
# budget 250000
