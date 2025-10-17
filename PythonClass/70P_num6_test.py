# 삼각형의 한 변의 길이를 side 변수로 나타낸다.
# side 변수의 초기값은 100이다.
# side 변수를 이용하여 화면에 삼각형을 그려보자

import turtle           # turtle 라이브러리를 가져온다. python turtle graphics라는 창이 나옴.
t = turtle.Turtle()     # 변수 t를 Turtle 함수로 정의한다. 변수 t가 화면 안에 화살표 모양으로 나온다.
t.shape("turtle")       # 변수 t의 모양을 "turtle"(거북이)모양으로 만든다. 이때 화살표 모양이었던 t가 거북이 모양으로 바뀜.

side = 100              # 변수 side에 정수 100의 값을 저장. 이 변수는 삼각형의 한 변의 길이로 사용한다.

t.forward(side)         # t를 앞으로 변수 side의 값(현재 100)만큼 전진시켜라. 변수가 아닌 상수(숫자)가 들어갈 수도 있고, t.fd의 형태로 줄여서 사용할 수 있다.
t.left(120)             # t가 바라보는 방향을 왼쪽으로 120도 만큼 돌려라.
t.forward(side)
t.left(120)
t.forward(side)
t.left(120)             # 문제에서 거북이가 오른쪽을 바라보고 있기에 이 코드까지 실행시켜주어야 한다.

turtle.done()           #사용자가 창을 닫을 때까지 프로그램이 종료되지 않고 대기하는 함수.