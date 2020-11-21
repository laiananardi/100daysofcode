# 1- From the string bellow, extract text and print a new string that says
# "1 Welcome Ring To Tyler"
# 2- Print the same string backwards...
# hint: Google is your friend

msg='welcome to Python 101: Strings'
string = msg[-10]+" "+msg[0:7]+" "+msg[-5:-1]+" "+msg[8:10]+" "+msg[8]+msg[12]+msg[2]+msg[1]+msg[-5]
print(string.title())
# 1 Welcome Ring To Tyler
print(string[::-1].title())
# Relyt Ot Gnir Emoclew 1