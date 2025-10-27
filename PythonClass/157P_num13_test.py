# 컴퓨터 사용자가 가위, 바위 , 보 게임을 할 수 있는 프로그램을 작성 해보자.

import random

options = ['가위', '바위', '보']

user_choice = input("가위, 바위, 보를 입력하시오: ")
computer_choice = random.choice(options)
print("컴퓨터:", computer_choice)

if user_choice == computer_choice :
    print("비겼습니다.")
elif user_choice == '바위' and computer_choice == '가위' :
    print("컴퓨터가 졌습니다.")
elif user_choice == '가위' and computer_choice == '보' :
    print("컴퓨터가 졌습니다.")
elif user_choice == '보' and computer_choice == '바위' :
    print("컴퓨터가 졌습니다.")
else :
    print("컴퓨터가 이겼습니다.")