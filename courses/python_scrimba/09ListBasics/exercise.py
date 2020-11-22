# SELLING LEMONADE
# The lists show number of lemonades sold per week
# Profit for each lemonade sold is 1.5$
# 1- Add another day to week 2 list by capturing a number as input
# 2- Combine the two lists into the list called 'sales
# 3- Calculate/print how much you have earned on: best day, worst day, separately and in total

sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
sales = []
print('Enter number of lemonade sold: ' )
day = input()
# Add an element to the sales_w2 list:
sales_w2.append(int(day))

# sales = sales_w1 + sales_w2
# Add the elements of sales_w1 to the sales list:
sales.extend(sales_w1)
sales.extend(sales_w2)
# put the list in order
# sales.sort()
# worst_day = sales[0] * 1.5
# best_day = sales[-1] * 1.5

worst_day = min(sales) * 1.5
best_day = max(sales) * 1.5

combined = worst_day + best_day

print(f'Worst day: $ {worst_day}')
print(f'Best day: $ {best_day}')
print(f'Combined: $ {combined}')