// 예제 3-7
// 알파벳의 아스키코드 값 출력하기
#pragma warning(disable:4996)
#include <stdio.h>

int main () {
    char alphabat = 'T';

    printf("alphabet 변수의 값: %c\n", alphabat);
    printf("알파벳 'T'에 해당하는 ASCII 코드 값: %d\n", alphabat); //같은 변수를 사용했으나 정수로 출력을 명령하니 아스키코드 값이 나옴

    return 0;
}