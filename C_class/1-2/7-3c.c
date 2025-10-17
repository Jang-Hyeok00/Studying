#pragma warning(disable:4996)
#include <stdio.h>
#include <math.h>

#define PI 3.14159265358979323846

void sin_e (int i, int j, double x);

int main(void) {

    int i = 0, j = 0;
    double x = 0;

    sin_e(i, j, x);

    return 0;
}

void sin_e (int i, int j, double x) {

    for (i; i <= 360; i += 15) {
        
        x = sin(i * PI / 180);
        printf("sin(%3d)의 값은 %+.2lf", i, x);

        for (j = -20; j < x*10; j++) {
            printf(" ");
        }

        printf("*\n");
    }
}