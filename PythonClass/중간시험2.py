import turtle
t = turtle.Turtle()
t.shape("turtle")

radius = 50

t.up()
t.goto(0,0)
t.down()
t.circle(radius)

radius = 70


t.up()
t.goto(100,0)
t.down()
t.circle(radius)

radius = 90

t.up()
t.goto(200,0)
t.down()
t.circle(radius)

turtle.done()