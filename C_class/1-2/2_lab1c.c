#pragma warning(disable:4996)
#include <stdio.h>

int main () {

    int num;
    char txt;
    double fl;



    printf("정수를 입력하세요: ");
    scanf("%d", &num);

    printf("문자를 입력하세요: ");
    scanf(" %c", &txt); //공백은 enter를 무시하기 위해 있음. 만약 터미널(gcc)로 실행했는데 공백 없으면 공백이 입력받은 판정이 되어버림!!

    printf("실수를 입력하세요: ");
    scanf("%lf", &fl);

    printf("입력받은 정수 : %d\n", num);
    printf("입력받은 문자 : %c\n", txt);
    printf("입력받은 정수 : %lf\n", fl);

    return 0;
}