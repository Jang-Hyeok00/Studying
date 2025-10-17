#pragma warning(disable:4996)
#include <stdio.h>



int main() {
    
    //프로그래밍 문제 6 - 1
    int fibonacciTerm;
    int fibo1, fibo2, fiboSum = 0;
    
    printf("몇 항까지의 피보나치수열을 생성할까요? ");
    scanf("%d", &fibonacciTerm);


    printf("피보나치수열:");

    for (int i = 1; i <= fibonacciTerm; i++)
    {
        if (i >= 3)
        {
            fiboSum = fibo1 + fibo2;
            printf(" %d", fiboSum);
            
            fibo1 = fibo2;
            fibo2 = fiboSum;
        }
        else
        {
            fibo2 = fibo1;
            fibo1 = 1;
            printf(" %d", fibo1);
        }
    }


    //프로그래밍 문제 6-2
    int herTerm;
    double her;
    
    printf("\n몇 개의 조화수열 항을 생성하시겠습니까? ");
    scanf("%d", &herTerm);

    printf("조화수열의 식 : 1 + 1/2 + ... + 1/%d\n", herTerm);

    for (double i = 1; i <= herTerm; i++)
    {
        if (herTerm > 0)
        {
        her += (1 / i);
        }
        else
        {
            printf("ERROR!! 입력값이 적절하지 않습니다!");
        }
    }
    printf("조화수열의 합 = %.4lf\n", her);


    //프로그래밍 문제 6-3
    int num1, num2;
    int stp = 0;

    printf("양의 정수 2개 입력하시오: ");
    scanf("%d %d", &num1, &num2);

    for(int i = 2; ; i++) {
        for(int j = 2; ; j++) {
            if (num1 * i == num2 * j) {
                printf("최소공배수 = %d\n", num1*i);
                stp = 1;
                break;
            } else if (num1*i < num2*j) {
                break;
            }
        }
        if (stp == 1) {
            break;
        }
    }


    //프로그래밍 문제 6-4
    int n1, n2, count;

    printf("두 개의 양의 정수를 입력하세요: ");
    scanf("%d %d", &n1, &n2);

    printf("소수 범위 [%d, %d] 내의 소수\n", n1, n2);
    for (int i = n1; i <= n2; i++) {
        count = 0;
        for (int j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            printf("%d ", i);
        }
    }
    printf("\n");

    //프로그래밍 문제 6-5
    int col = 0;
    for(int i = 1; i < 30; i++) {
        if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9 ) {
            printf("짝 ");
            col++;
        } else {
            printf("%d ", i);
            col++;
        }
        if (col == 10) {
            printf("\n");
            col = 0;
        }
    }
}