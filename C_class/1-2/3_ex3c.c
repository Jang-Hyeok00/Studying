// 예제 3-3
// int 자료형에서 오버플로가 발생하는 경우
#pragma warning(disable:4996)
#include <stdio.h>

int main () {

    int maxInt = 2147483647; //int의 값을 최댓값으로 초기화
    int overflow1 = maxInt + 1;

    printf("maxInt: %d\n", maxInt);
    printf("overflow1: %d\n", overflow1);

    unsigned int maxUint = 4294967295U; // unsigned int의 최댓값
    unsigned int overflow2 = maxUint +1;

    printf("maxInt: %u\n", maxUint);
    printf("overflow1: %u\n", overflow2);

    return 0;

}