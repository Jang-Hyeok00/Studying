# 원의 반지름을 변수 radius에 저장한다.
# radius의 초기값은 50이다.
# radius 변수를 20씩 중가시키면서 (0,0), (100,0) , (200,0) 좌표에 원을 3개 그려보자.
# 터틀 그래픽을 이용하고, 반복문은 사용하지 않는다.

import turtle           # turtle 라이브러리를 가져온다. python turtle graphics라는 창이 나옴.
t = turtle.Turtle()     # 변수 t를 Turtle 함수로 정의한다. 변수 t가 화면 안에 화살표 모양으로 나온다.
t.shape("turtle")       # 변수 t의 모양을 "turtle"(거북이)모양으로 만든다. 이때 화살표 모양이었던 t가 거북이 모양으로 바뀜.

radius = 50             # 변수 radius에 정수 50을 저장한다. 

t.up()                  # t를 위로 올린다(penup). 이 코드를 시행하지 않는다면 내가 원하는 위치로 갈때(goto) 선이 그어진다(pendown 상태).
t.goto(0,0)             # t의 위치(좌표 0, 0)로 이동해라.
t.down()                # t를 아래로 내린다(pendown). 이 코드로 펜을 내려서 움직이면 그대로 선이 그어진다.
t.circle(radius)        # t로 반지름이 변수 radius의 값(현재 50)인 원모양으로 움직여라. 이때 펜이 내려져 있으므로 원이 그려진다.


radius = radius + 20    # 변수 radius에 현재 radius의 값(정수 50) + 20의 값을 저장한다(50+20이니 정수 70 저장).

t.up()
t.goto(100,0)           # t의 위치(좌표 100, 0)로 이동해라.
t.down()
t.circle(radius)        # 현재 radius값이 70이므로 이전에 그렸던 원보다 반지름이 20만큼 긴 원이 그려진다.


radius = radius + 20    # 변수 radius에 현재 radius의 값(정수 70) + 20의 값을 저장한다(50+20이니 정수 90 저장).

t.up()
t.goto(200,0)           # t의 위치(좌표 100, 0)로 이동해라.
t.down()
t.circle(radius)        # 현재 radius값이 90이므로 이전에 그렸던 원보다 반지름이 20만큼 긴 원이 그려진다.

turtle.done()           #사용자가 창을 닫을 때까지 프로그램이 종료되지 않고 대기하는 함수.