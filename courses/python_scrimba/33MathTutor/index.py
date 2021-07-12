from random import randrange as r 

from time import time as t

num_questions = int(input("Quantas perguntas você quer responder?"))
max = int(input("Maior número a ser usado para as perguntas"))
score = 0
ans_list = []

start_t = t()

for n in range(num_questions):
    num1, num2 = r(1,max+1), r(1,max+1)
    r_ans = num1*num2
    u_ans = int(input(f'{num1} X {num2} ='))
    ans_list.append(f'{num1} X {num2} = {r_ans} you:{u_ans}')

    if r_ans == u_ans:
        score += 1
    end_t = t()

print(f'Você acertou {score} questões de {num_questions} ({round(score/num_questions*100)}%) em {round(end_t-start_t,1)} segundos ({round((end_t-start_t)/num_questions,1)}segundos/questão)')
for a in ans_list:
    print(a)