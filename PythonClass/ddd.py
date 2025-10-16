dog_age = int(input("강아지의 나이를 입력하시오: ")) 

if dog_age < 0:
    print("오류")
    exit()
elif dog_age < 3:
    human_age = dog_age * 10
else:
    human_age = 20 + (dog_age - 2) * 4

print("이 강아지를 사람 나이로 " + str(human_age) + "살 입니다.")