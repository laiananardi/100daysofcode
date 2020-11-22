# DISTANCE CONVERTER CONVERTING KILOMETERS TO MILES
# Take two inputs from user:
# 1-first name
# 2-the distance in km
# Print:
# Greet user by name and show km, and mile values
# 1mile is 1.609 kilometers

print("Enter your name:")
name = input()
print("Enter distance in km:") 
km = input()
mi = float(km)/1.607


print(f'Hello {name}! {km} km is equivalent to {mi:.1f} miles')