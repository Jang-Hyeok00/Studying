#include <stdio.h>


int main () {

    double income, tax;

    printf("종합 소득을 입력하세요(만 원): ");
    scanf("%lf", &income);

    if (income <= 1200)
    {
        tax = income * 0.06 - 0;
    }
    else if (income <= 4600)
    {
        tax = income * 0.15 - 108;
    }
    else if (income <= 8800)
    {
        tax = income * 0.24 - 522;
    }
    else if (income <= 15000)
    {
        tax = income * 0.35 - 1490;
    }
    else if (income <= 30000)
    {
        tax = income * 0.38 - 1940;
    }
    else if (income <= 50000)
    {
        tax = income * 0.4 - 2540;
    }
    else if (income <= 100000)
    {
        tax = income * 0.42 - 3540;
    }
    else
    {
        tax = income * 0.45 - 6540;
    }

    printf("소득세는 %.2lf만 원입니다.", tax);

    return 0;
}