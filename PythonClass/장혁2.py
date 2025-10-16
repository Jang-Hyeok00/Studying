##import turtle
##t = turtle.Turtle()
##t.shape("turtle")
##
##
##t.fd(300)
##t.left(90)
##t.fd(100)
##t.left(90)
##t.fd(300)
##t.left(90)
##t.fd(100)
##
##
##t.fillcolor("green")
##t.begin_fill()
##t.circle(50)
##t.end_fill()
##
##
##t.goto(200,0)
##
##
##t.fillcolor("pink")
##t.begin_fill()
##t.circle(50)
##t.end_fill()


##import turtle
##colors = ["red","purple","blue","green","yellow","orange"] ##문자열을 담은 리스트 작성
##t = turtle.Turtle()
##
##turtle.bgcolor("black") ##배경색을 검정색으로
##t.speed(0)  ## 속도를 0(최고속도)로 설정
##t.width(3)  ##펜 굵기를 3으로
##length = 10 ##length라는 변수에 10의 값을 줌
##count = 0 ## count 변수를 0을 줌
##
##while length < 500: ##반복문 length가 500 미만일때까지 실행
##    t.pencolor(colors[length%6]) ## 0~5 사이 인덱스를 얻음. length를 6으로 나눈 나머지
##    t.forward(length) ##바라보는 방향으로 length만큼 전진
##    count += 1 ## 선이 하나 그어질때마다 count 값이 1씩 증가
##    t.right(89)
##    length += 5 ##다음 선 길이를 5만큼 증가시키기
##
##print(count) ##다 그어지고 난 후에 count의 값을 출력
##turtle.done()


##x = 100
##y = 200
##sum = x + y
##print(sum)


##name = "홍길동"
##address = "서울시 종로구 1번지"
##print(name)
##print(address)

##x = 100
##y = 200
##sum = x + y
##print(x, "과", y, "의 합은", sum, "입니다.")
##print(f"{x} 과 {y} 의 합은 {sum} 입니다.") ## f-문자열 방식. 변수를 중괄호 안에 넣어주기.


##import turtle
##t = turtle.Turtle()
##t.shape("turtle")
##
##radius = 50 ## 이 변수값만 바꿔주면 원의 크기를 동시에 전부 바꿀 수 있음
##t.circle(radius) 
##t.fd(30)
##t.circle(radius)
##t.fd(30)
##t.circle(radius)


##num1 = int(input("첫 번쩨 정수를 입력하세요 : ")) ##int가 없으면 input의 값은 문자로 인식
##num2 = int(input("두 번째 정수를 입력하세요 : "))
##
##sum = num1 + num2 ## int가 없다면 num1 = 100 , num2 = 200이라면 sum이 100200이 되어버림
##print(sum)


import turtle
t = turtle.Turtle()
t.shape("turtle")

size = int(input("집의 크기는 얼마로 할까요? "))

t.fillcolor("blue")
t.begin_fill()
t.fd(size)
t.right(90)
t.fd(size)
t.right(90)
t.fd(size)
t.right(90)
t.fd(size)
t.end_fill()


t.fillcolor("red")
t.begin_fill()
t.right(30)
t.fd(size)
t.right(120)
t.fd(size)
t.right(120)
t.fd(size)
t.end_fill()






