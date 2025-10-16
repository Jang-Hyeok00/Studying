#pragma warning(disable:4996)
#include <stdio.h>
#include <math.h>
int discountedPrice(int cost, int discount);

int main() {
    discountedPrice(43000, 15);
}



int discountedPrice(int cost, int discount) {
    
    int result;

    printf("상품 가격 : %d\n", cost);
    printf("할인율(%%) : %d\n", discount);

    result = cost - (cost * discount / 100);
    printf("할인 가격은 %d\n", result);
}