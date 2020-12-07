class Person:
    def fullname(self):
        print("Laiana Nardi Santiago")
    def email(self):
        print("laiana.nardi@gmail.com")
class Student(Person):
    def graduationyear(self):
        print("2020")

Student().fullname() # Laiana Nardi Santiago
Student().email() # laiana.nardi@gmail.com
Student().graduationyear() # 2020