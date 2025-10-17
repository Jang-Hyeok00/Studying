#pragma warning(disable:4996)
#include <stdio.h>

int main () {

    //프로그래밍 문제 2-1
    printf("Hello World!\n");
    printf("Hello World!\n");

    //프로그래밍 문제 2-2
    int numb1 = 1000;
    int numb2 = 5000;

    printf("%d\n", numb1);
    printf("%d\n", numb2);

    //프로그래밍 문제 2-3
    int num;

    printf("정수를 입력하세요: ");
    scanf("%d", &num);
    printf("입력한 숫자는 %d입니다.\n", num);

    //프로그래밍 문제 2-4
    float a, h, area;

    printf("및변: ");
    scanf("%f", &a);

    printf("높이: ");
    scanf("%f", &h);

    area = a * h / 2;

    printf("넓이: %.1f\n", area);


    //프로그래밍 문제 2-5
    double num1, pow;

    printf("실수를 입력하세요: ");
    scanf("%lf", &num1);

    pow = num1 * num1;
    printf("입력한 숫자의 제곱은 %.2lf입니다.\n", pow);

    //프로그래밍 문제 2-6
    printf("안녕하세요.\n");
    printf("제 이름은 홍길동입니다.\n");
    printf("나이는 25살입니다.\n");

    return 0;
}