#pragma warning(disable:4996)
#include <stdio.h>
#include <math.h>

void distance (double x1, double y1, double z1, double x2, double y2, double z2);


int main (void) {

    double x1, y1, z1, x2, y2, z2;

    printf("A(x, y, z) : ");
    scanf("%lf %lf %lf", &x1, &y1, &z1);

    printf("B(x, y, z) : ");
    scanf("%lf %lf %lf", &x2, &y2, &z2);

    distance(x1, y1, z1, x2, y2, z2);

    return 0;
}

void distance (double x1, double y1, double z1, double x2, double y2, double z2) {

    double d;

    d = sqrt(pow(x2 - x1, 2) + pow((y2 - y1), 2) + pow((z2 - z1), 2));

    printf("D = %.2lf", d);
}