# 사용자가 입력하는 3가지 색상을 리스트에 저장 하였다가 하나씩 꺼내서 그 색상으로 채워진 원을 그리는 
# 프로그램을 작성해보자, -> 노란색, 빨간색 , 파란색

import turtle
# turtle 라이브러리를 불러온다.
#   - python turtle graphics 창을 띄운다.

t = turtle.Turtle()
# 변수 t를 tutle 함수로 정의한다.
#   - 변수 t가 화살표 모양으로 화면에 출력된다.

t.shape("turtle")
# 변수 t의 모양을 "turtle"로 한다.
#   - 변수 t의 모양이 화살표 모양이서 거북이 모양으로 변한다.





lista = []
# 변수 lista를 리스트(list)로 정의한다.
#   - 색상을 저장할 리스트로 사용할 변수다.
#   - 현재는 빈 배열이지만 안에 직접 배열의 내용을 작성할 수 있다.

color = input("색상 #1을 입력하시오: ")
# 변수 color의 값을 사용자로부터 입력받아 저장한다.
#   - intput()은 괄호 안에 있는 내용을 화면(콘솔)에 출력하고 키보드 입력을 기다린다.

lista.append(color)
# lista라는 변수(리스트) 안에 변수 color의 값을 리스트 끝에 추가한다.
#   - append() 매서드는 괄호안에 있는 값을 리스트 끝에 추가한다.

color = input("색상 #2을 입력하시오: ") # 이런식으로 다른 색상도 리스트에 추가한다.
lista.append(color)

color = input("색상 #3을 입력하시오: ")
lista.append(color) # 이로써 lista는 ['색상1', '색상2', 색상2'] 형태의 리스트가 된다.





# [첫 번째 원 그리기]
t.fillcolor(lista[0])
# 도형 내부를 채울 색으로 괄호 값 안에 있는 색을 지정한다.
#   - lista[0]는 리스트 lista의 0번째 인덱스(index). 즉, '색상1'을 의미한다.

t.begin_fill()
# 채우기 시작
#   - 이후 그리는 닫힌 도형이  fillcolor의 색으로 채워진다.

t.circle(50)
# 반지름이 50인 원을 그린다.
#   - 괄호안에 있는 값을 반지름으로 가지는 원을 그린다.

t.end_fill()
# 채우기 종료
#   - begin_fill 이후 그린 도형 내부가 fillcolor의 색으로 채워진다.




# [두 번째 원을 그릴 위치로 이동]
t.up()
# t를 위로 올린다(penup).
#   - 이 코드를 시행하지 않는다면 내가 원하는 위치로 갈때(goto) 선이 그어진다(pendown 상태).

t.goto(100, 0)
# t의 위치를 이동시켜라.
#   - t.goto(x,y)는 t의 위치를 이동시킨다. 괄호 안에 첫 번째는 x좌표 두 번째는 y좌표를 의미한다.

t.down()
# t를 아래로 내린다(pendown).
#   - 이 코드로 펜을 내려서 움직이면 그대로 선이 그어진다.


# [두 번째 원 그리기]
t.fillcolor(lista[1]) # 색상을 lista 리스트의 1번째 인덱스(index)인 '색상2'로 변경.
t.begin_fill()
t.circle(50)
t.end_fill()

# [세 번째 원을 그릴 위치로 이동]
t.up()
t.goto(200, 0)
t.down()

# [세 번째 원 그리기]
t.fillcolor(lista[2]) # 색상을 lista 리스트의 1번째 인덱스(index)인 '색상2'로 변경.
t.begin_fill()
t.circle(50)
t.end_fill()

turtle.done() #사용자가 창을 닫을 때까지 프로그램이 종료되지 않고 대기하는 함수.