print('Guessing game') 
# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game. 
# Give user input box: 1. To capture guesses, 
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements durng execution, so If you want to see prints during whle loop, then print to the input box

#Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution, so If you want to see prints during whle loop, print to the input box (This is specific to this platform)
# Three Loop Questions:
#1. What do I want to repeat?
#  -> 
#2. What do I want to change each time?
#  -> 
#3. How long should we repeat?
#  -> 

# num = 12
# guess = 0
# guess_limit=3
# guess_number = 0

# while guess_number < guess_limit:
#     guess = int(input(f'Guess # {guess_number+1} a number 1-20: last guess:{guess} '))
#     if guess == num:
#         print(f'You Win! You Guessed it: {guess}')
#         break
#     else:
#         print(f'No, not {guess}!')
#         guess_number += 1
# if guess != num:
#     print(f'Sorry you lose! It was {num}')

num = 76
tentativa = 0
tentativa_limit=5
tentativa_numero = 0


tentativa = int(input(f'Adivinhe um número de 1 - 100: '))
tentativa_numero +=1
while tentativa_numero < tentativa_limit:
    
    if tentativa != num:
        tentativa_numero +=1
        if tentativa > num:
            tentativa = int(input(f'{tentativa} Muito baixo! tente novamente: '))
        else:
            tentativa = int(input(f'{tentativa} Muito alto! tente novamente: '))
    if tentativa == num:
        print(f'Você venceu! Você acertou o número: {tentativa}')
        break
    
if tentativa != num:
    print(f'Você perdeu! A reposta correta era: {num}')
