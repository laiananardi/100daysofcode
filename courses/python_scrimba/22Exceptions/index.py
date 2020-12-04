try:
    num=int(input('Enter a number between 1 and 30: '))
    num1 = 30/num
    if num > 30:
        raise ValueError(num)
except ZeroDivisionError as err:
    print(err, "You can't divide by Zero!!!")
except ValueError as err:
    print(err,num, "Bad Value not between 1 and 30!")
except:
    print("Invalid Input!")
else:
    print("30 divided by",num, "is: ", 30/num)
finally:
    print("**Thank you for playing!**")

#try:
    #code you want to run
#except:
    #executed if error occurs
#else:
    #executed if no error
#finally:
    #always executed 

