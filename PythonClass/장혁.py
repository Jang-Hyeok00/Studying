##import turtle # turtle이라는 라이브러리를 가져와라
##t = turtle.Turtle() # 그 모듈의 turtle의 클래스를 t라고 정한다
##t.shape("turtle") # 모양을 "turtle"로 한다.
##
##t.fd(100)
##t.left(120)
##t.fd(100)
##t.left(120)
##t.fd(100)


import turtle
t = turtle.Turtle()
t.shape("turtle")

t.fillcolor("blue")
t.begin_fill()
t.circle(100)
t.end_fill()

t.up()
t.fd(100)
t.down()

t.fillcolor("orange")
t.begin_fill()
t.circle(120)
t.end_fill()
