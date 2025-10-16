##weight = float(input("몸무게를 kg 단위로 입력하시요: "))
##height = float(input("키를 미터 단위로 입력하시오: "))
##
##bmi = (weight /(height**2))
##
##print("당신의 BMI=", bmi)


##x = int(input("첫 번째 수를 입력하시오:"))
##y = int(input("두 번째 수를 입력하시오:"))
##z = int(input("세 번째 수를 입력하시오:"))
##
##avg = (x+y+z) / 3
##
##print("평균 =", avg)


##import random
##n1 = random.randint(1,10)
##n2 = random.randint(1,10)
##n3 = random.randint(1,10)
##n4 = random.randint(1,10)
##n5 = random.randint(1,10)
##n6 = random.randint(1,3)
##
##
##print("산수 퀴즈에 오신 것을 환영합니다.\n")
##
##ans = int(input(f"{n1} + {n2} = "))
##print(ans == n1 + n2)
##
##ans = int(input(f"{n3} - {n4} = "))
##print(ans == n3 - n4)
##
##ans = int(input(f"{n5} ** {n6} = "))
##print(ans == n5 ** n6)


##import math
##
##radius = 3
##circ = 2 * math.pi * radius
##print("원의 둘레=", circ)
##
##print("7!=", math.factorial(7))
##
##print("6.999999999와 7의 비교=", math.isclose(6.999999999, 7))
##
##print("log(3.4)=", math.log(3.4))
##
##print("4의 제곱근=", math.sqrt(4.0))


##A = int(input("A과목 성적을 입력하시오:"))
##B = int(input("B과목 성적을 입력하시오:"))
##C = int(input("C과목 성적을 입력하시오:"))
##D = int(input("D과목 성적을 입력하시오:"))
##
##avg = (A+B+C+D)/4
##
##if A >= 40 and B >= 40 and C >= 40 and D >= 40 and avg >= 60 :
##    print("합격입니다.")
##else:
##    print("불합격입니다.")


##num = int(input("정수를 입력하시오:"))
##
##if num % 2 == 0 :
##    print("짝수입니다.")
##else:
##    print("홀수입니다.")



##import turtle
##t = turtle.Turtle()
##t.shape("turtle")
##
##t.penup()
##t.goto(100,100)
##t.write("거북이가 여기로 오면 양수입니다.")
##t.goto(100,0)
##t.write("거북이가 여기로 오면 0입니다.")
##t.goto(100,-100)
##t.write("거북이가 여기로 오면 음수입니다.")
##
##t.goto(0,0)
##t.pendown()
##n = int(turtle.textinput("꼬북꼬북", "숫자를 입력하시오:"))
##
##if n > 0 :
##    t.goto(100, 100)
##elif n == 0 :                # if n == 0 :
##    t.goto(100, 0)
##else :                       # if n < 0 :
##    t.goto(100,-100)


print("안녕하세요? 두근두근 영화관입니다.")
age = int(input("나이를 입력하시오: "))

if age >= 15:
    print("이 영화를 보실 수 있습니다.")
else:
    print("이 영화를 보실 수 없습니다.")









