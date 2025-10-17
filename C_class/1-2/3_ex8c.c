// 예제 3-8 (매우 중요)
// 10진수, 16진수, 8진수, 2진수 상수 출력하기
#pragma warning(disable:4996)
#include <stdio.h>

int main () {
    int decimal = 42; // 10진수 상수
    int hexadecimal = 0x2A; // 16진수 상수
    int octal = 052; // 8진수 상수
    int binary = 0b101010; // 2진수 상수

    printf("Decimal: %d\n", decimal);
    printf("Hexadecimal: %x\n", hexadecimal);
    printf("Octal: %o\n", octal);
    printf("Binary: %d\n", binary);

    return 0;
}