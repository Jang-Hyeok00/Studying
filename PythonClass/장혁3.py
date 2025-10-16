##p = int(input("분자를 입력하시오:"))
##q = int(input("분모를 입력하시오:"))
##print("나눗셈의 몫=", p//q)
##print("나눗셈의 나머지=", p%q)
##input()

##number = int(input("정수를 입력하시요:"))
##if (number %2 == 0):
##    print("짝수입니다.")
##else:
##    print("홀수입니다.")


##sec = int(input("초를 입력하세요."))
##
##hour = sec // 3600
##sec = sec % 3600
##min = sec // 60
##remainder = sec % 60
##
##print(f"{hour}시 {min}분 {remainder}초 입니다.")


##import turtle
##t = turtle.Turtle()
##t.shape("turtle")
##
##n = int(input("몇각형을 그리시겠습니까?(3이상):"))
##
##for i in range (n):
##    t.forward(100)
##    t.left(360/n)


##americano_price = 2000
##cafelatte_price = 3000
##capucino_price = 3500
##
##americano_cell = int(input("아메리카노 판매 개수:"))
##cafelatte_cell = int(input("카페라떼 판매 개수:"))
##capucino_cell = int(input("카푸치노 판매 개수:"))
##
##total_cell = americano_price*americano_cell
##total_cell = total_cell+cafelatte_price*cafelatte_cell
##total_cell = total_cell+capucino_price*capucino_cell
##
##print(f"총 매출은 {total_cell}원 입니다.")


##temp_f = int(input("화씨온도:"))
##
##temp_c = (temp_f-32)*5/9
##
##print(f"섭씨온도: {temp_c}")


##money = int(input("투입한 돈:"))
##price = int(input("물건값:"))
##
##change = money - price
##print(f"거스름돈: {change}")
##
##coin500s = change // 500
##change = change % 500
##coin100s = change // 100
##change = change % 100
##coin50s = change // 50
##
##print(f"500원 동전의 개수: {coin500s}")
##print(f"100원 동전의 개수: {coin100s}")
##print(f"50원 동전의 개수: {coin50s}")


money = 10000000
rate = 0.06
n = 5
print("5년 후 원리금 합계=",int(money*(1+rate)**n))




