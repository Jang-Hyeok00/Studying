#pragma warning(disable:4996)
#include <stdio.h>
#include <math.h>

void discountedPrice(int cost, int discount);

int main(void) {

    int cost, discount;

    printf("상품 가격 : ");
    scanf("%d", &cost);

    printf("할인율(%%) : ");
    scanf("%d", &discount);

    discountedPrice(cost, discount);

    return 0;
}



void discountedPrice(int cost, int discount) {
    
    int result;

    result = cost - (cost * discount / 100);
    
    printf("할인 가격은 %d\n", result);
}