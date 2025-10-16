import random

x = random.randint(1, 100)
y = random.randint(1, 100)

ans = int(input(f"{x} * {y} = "))

if (ans == x * y):
    print("정답입니다.")
else:
    print("오답입니다.")
