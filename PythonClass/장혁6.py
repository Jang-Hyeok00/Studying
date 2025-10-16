##message = "철수가 '안녕'이라고 말했습니다."
##print(message)

##print('나는 현재' + str(21) + '살이다.')

##print(type("Hello World!"))
##print(type(3.2))
##print(type(17))
##
##x=10
##print(type(x))
##
##y = True
##print(type(y))



##print("안녕하세요?")
##
##name = input('이름이 어떻게 되시나요?')
##print('\n만나서 반갑습니다.'+ name + "씨")
##print('이름의 길이는 다음과 같군요:' + str(len(name)))
##
##age = int(input("나이가 어떻게 되시나요?"))
##print("내년이면 " + str(age+1) + "이 되시는군요.")




##print("Hello " + "World") #str + str
##
##print("=" * 50) # str을 몇번 출력할건지
##
##print(len("Hello world")) #str의 길이
##
##print('Hello' in "Hello World") #서브 문자열이 있으면 True



##text = " Hello World "
##print(text.count("o")) # 서브 문자열이 나오는 횟수
##print(text.lower()) # 소문자로 만든다
##print(text.strip()) # 좌우 공백 문자 제거
##


##price = 10000
##print(f"상품의 가격은 {price}원입니다.")
##
##product = "coffee"
##count = 3
##price = 10000
##print(f"상품 {product} {count}개의 가격은 {count*price}원입니다.")
##
##
##pi = 3.141592
##print(f"원주율={pi:.2f}") #소수점 두 번째 자리까지 출력
##
##
##s = "Monty Python"
##print(s[6:10]) #문자열의 배열 s[6] 부터 s[9]까지의 문자를 출력
##
##print(ord('A')) #문자 'A'의 코드값 65를 출력한다.
##print(chr(65)) #코드값 65를 'A'로 변환하여 출력한다.



##print("말 한마디로\n천냥빚을 갚는다.")
##
##
##message = 'doesn\'t'
##print(message)
##
### message = 'doesn't'가 되면 에러가 뜬다.


###이니셜 출력하기
##first = input("이름의 첫 번째 글자를 입력하시오: ")
##middle = input("이름의 두 번째 글자를 입력하시오: ")
##last = input("이름의 세 번째 글자를 입력하시오: ")
##
##initial = first[0] + middle[0] + last[0]
##print("\n영어 이니셜은" + initial + "입니다.")
##
##
###단답형 퀴즈 프로그램
##q = input("세상에서 가장 쉬운 프로그래밍 언어는? ")
##print(q == "파이썬")
##
##q = input("파이썬에서 제곱 연산자는? ")
##print(q == "**")
##
##q = input("프로그래밍 언어에서 텍스트를 무엇이라고 부르는가? ")
##print(q == "문자열")
##
##
###날짜 차이 계산기
##import datetime
##
##firstMeet = datetime.datetime(2022, 9, 1)
##currentDate = datetime.datetime.now()
##
##delta = currentDate - firstMeet
##print("만난 일: " + str(firstMeet))
##print("현재: " + str(currentDate))
##print("만난 지 " + str(delta.days) + "일 되었습니다.")



##slist = []
##slist.append("영어")
##slist.append("수학")
##slist.append("사회")
##slist.append("과학")
##
##print(slist)
##print(len(slist))

##friend_list = []
##
##friend = input("친구이 이름을 입력하시오: ")
##friend_list.append(friend)
##
##friend = input("친구이 이름을 입력하시오: ")
##friend_list.append(friend)
##
##friend = input("친구이 이름을 입력하시오: ")
##friend_list.append(friend)
##
##friend = input("친구이 이름을 입력하시오: ")
##friend_list.append(friend)
##
##friend = input("친구이 이름을 입력하시오: ")
##friend_list.append(friend)
##
##print(friend_list)


import turtle
t = turtle.Turtle()
t.shape("turtle")


color_list = ["yellow", "red", "blue", "green"]

t.fillcolor(color_list[0])
t.begin_fill()
t.circle(100)
t.end_fill()
t.forward(50)

t.fillcolor(color_list[1])
t.begin_fill()
t.circle(100)
t.end_fill()
t.forward(50)

t.fillcolor(color_list[2])
t.begin_fill()
t.circle(100)
t.end_fill()
t.forward(50)

t.fillcolor(color_list[3])
t.begin_fill()
t.circle(100)
t.end_fill()


























