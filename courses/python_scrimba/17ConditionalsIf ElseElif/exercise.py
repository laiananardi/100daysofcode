print('if elif else - Exercise')
# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

print('Escolha uma operação (+, -, *, /) ou f para conerter  Celsius para Fahrenheit :')
operador = input ()

if operador.lower() == 'f':
    print('Insira uma temperatura em Celsius:')
    celsius = float(input())
    print(f'{celsius} Celsius é equivalente a  {(celsius*9/5)+32 } fahrenheit')
else:
    print('Insira o primeiro número:')
    num1 = float(input())
    print('Insira o segundo número:')
    num2 = float(input())
    
    if operador == '+':
        soma = num1 + num2
        print(f'O resultado é igual a {soma}')
    elif operador == '-':
        sub = num1 - num2
        print(f'O resultado é igual a {sub}')
    elif operador == '*':
        mul = num1 * num2
        print(f'O resultado é igual a {mul}')
    elif operador == '/':
        div = num1 / num2
        print(f'O resultado é igual a {div}')
    else:
        print('Erro! verifique se os dados inseridos estão corretos')