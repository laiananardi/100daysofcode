# DISTANCE CONVERTER CONVERTING KILOMETERS TO MILES
# Take two inputs from user:
# 1-first name
# 2-the distance in km
# Print:
# Greet user by name and show km, and mile values
# 1mile is 1.609 kilometers

print("Seu nome:")
name = input()
print("Distância em quilômetros :") 
km = input()
mi = float(km)/1.607


print(f'Olá {name}! {km} km equivale a {mi:.1f} milhas')

# Seu nome:
# Laiana 
# Distância em quilômetros :
# 30
# Olá Laiana! 30 km equivale a 18.7 milhas