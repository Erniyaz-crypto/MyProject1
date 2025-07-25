import random
import pyautogui as pug
import time

def gennum():
    kod = [91,94,98,90,92]
    _kod = random.choice(kod)
    _3s = random.randint(100,999)
    _2s = random.randint(10,99)
    _1s = random.randint(10,99)
    out = f"{_kod}-{_3s}-{_2s}-{_1s}"
    
    return out


a=int(input("Neshe nomer generatsiya etilsin: "))
time.sleep(3)

ls=[]

for i in range(a):
    a=gennum()    
    while a in ls:
        a=gennum()
    ls.append(a)    
    pug.write(f"{i+1}) {a}")
    pug.press("enter")

