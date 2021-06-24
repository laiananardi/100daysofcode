keys = 'abcdefghijklmnopqrstuvwyzàáãâéêóôõíúçABCDEFGHIJKLMNOPQRSTUVWYZÀÁÃÂÉÊÓÕÍÚÇ!'
print(keys)

# autogenerate the values string by offsetting original string
values = keys[-1] + keys[0:-1]
print(values)