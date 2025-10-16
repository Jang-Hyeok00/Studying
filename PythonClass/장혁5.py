##year = int(input("연도를 입력하세요: "))
##
##if ((year % 4 == 0 and year % 100 != 0) or year % 400 == 0):
##    print(f"{year}년은 윤년이다.")
##else:
##    print(f"{year}년은 윤년이 아니다.")


    
##import turtle
##t = turtle.Turtle() # 거북이를 만든다.
##t.shape("turtle")  # 커서의 모양을 거북이로 한다.
##
##t.width(3) # 선 두께를 3
##
##t.shapesize(3, 3) #거북이를 3배 확대
##
##while True:
##    command = input("명령어를 입력하시오: ")
##    if command == "l" or command == "left":
##        t.left(90)
##        t.fd(100)
##    if command == "r" or command == "right":
##        t.right(90)
##        t.fd(100)
##    if command == "quit":
##        turtle.bye()
##        exit()
##turtle.done()
 



##random.randrange(2)
##random.randint(0,1)
##random.choice([0,1])



##import random
##
##print("동전 던지기 게임을 시작합니다.")
##
##coin = random.randrange(2)
##
##if coin == 0:
##    print("앞면입니다.")
##else:
##    print("뒷면입니다.")
##
##    
##print("게임이 종료되었습니다.")


##import random
##
##print("주사위를 던져봅시다.")
##
##dice = random.randint(1,6)
##
##if dice == 1:
##    print("1입니다.")
##elif dice == 2:
##    print("2입니다.")
##elif dice == 3:
##    print("3입니다.")
##elif dice == 4:
##    print("4입니다.")
##elif dice == 5:
##    print("5입니다.")
##else:
##    print("6입니다.")
##
##    
##print("게임이 종료되었습니다.")




##import turtle
##import random
##
##screen = turtle.Screen()
##
##image1 = "front.gif"
##image2 = "back.gif"
##screen.addshape(image1)
##screen.addshape(image2)
##
##t1 = turtle.Turtle()
##
##
##coin = random.randrange(2)
##print(coin)
##
##if coin == 0:
##    t1.shape(image1)
##    t1.stamp()
##else:
##    t1.shape(image2)
##    t1.stamp()
##
##print("게임이 종료되었습니다.")



##num = int(input("정수를 입력하시오: "))
##
##if num > 0:
##    print("양수입니다.")
##elif num == 0:
##    print("0입니다.")
##else:
##    print("음수입니다.")




##score = int(input("시험 점수를 입력하시오: "))
##
##
##if score >= 95:
##    print("A+ 입니다.")
##elif score >= 90:
##    print("A0 입니다.")
##elif score >= 85:
##    print("B+ 입니다.")
##elif score >= 80:
##    print("B0 입니다.")
##elif score >= 75:
##    print("C+ 입니다.")
##elif score >= 70:
##    print("C0 입니다.")
##elif score >= 65:
##    print("D+ 입니다.")
##elif score >= 60:
##    print("D0 입니다.")
##else:
##    print("F 입니다.")




##import random
##time = random.randint(1, 24)
##
##print("좋은 아침입니다. 지금 시각은"+ str(time) + "시 입니다.")
##
##sunny = random.choice([True, False])
##
##if sunny == True:  # 그냥 if sunny: 라고 써도 true 값을 가져서 코드가 실행된다.
##    print("현재 날씨가 화창합니다.")
##else:
##    print("현재 날씨가 화창하지 않습니다.")
##
##if time >= 6 and time < 9 and sunny:
##    print("종달새가 노래를 합니다.")
##else:
##    print("종달새가 노래를 하지 않습니다.")



##import random
##options = ["왼쪽", "중앙", "오른쪽"]
##
##defense = random.choice(options)
##kick = input("어디로 공을 차시겠어요?(왼쪽, 중앙, 오른쪽)")
##
##if defense == kick:
##    print("패널티킥에 실패했습니다...")
##else:
##    print("패널티킥에 성공하였습니다!")



import turtle
t = turtle.Turtle()
t.shape("turtle")

s = turtle.textinput("뭘 그릴꼬북", "도형을 입력하시오:")

if s == "사각형":
    # int(turtle.textinput("","가로:"))와 같은 코드다
    w = turtle.numinput("사각형을 그리게다꼬~?", "가로:")
    h = turtle.numinput("사각형을 그리게다꼬~?", "세로:")
    t.fd(w)
    t.left(90)
    t.fd(h)
    t.left(90)
    t.fd(w)
    t.left(90)
    t.fd(h)
elif s == "삼각형":
    l = turtle.numinput("삼각형을 그리게다꼬~?", "한 변의 길이:")
    t.fd(l)
    t.left(120)
    t.fd(l)
    t.left(120)
    t.fd(l)
else:
    r = turtle.numinput("원을 그리게다꼬~?", "반지름:")
    t.circle(r)
































