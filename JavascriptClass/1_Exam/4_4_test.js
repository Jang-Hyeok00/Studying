let movie = {
    rate : [3, 4, 5, 3, 4, 4],
    averageRate : function () {
        let rateAdd = 0;
        let rateAverage = 0;
        for (let i = 0; i < this.rate.length; i++) {
            rateAdd += this.rate[i];
        }
        rateAverage = rateAdd / this.rate.length;
        return `영화의 평균 평점은 ${rateAverage.toFixed(2)}점 입니다.`
        /**
         * 그냥 rateAverage를 하면 소숫점이 너무 길게 나옴 3.8333333333333335
         * 그래서 개인적으로 소숫점 두 자리수 까지 나타내는 방법 두 가지를 찾아봤다.
         * 
         * 1. Math.round 사용 (한정적)
         * Math.round는 입력받은 숫자를 소수점 첫째 자리에서 반올림하여 가장 가까운 정수 값을 반환하는 함수라고 한다.
         * 따라서 Math.round(rateAverage)를 하면 4가 출력된다.
         * 소숫점 둘째까지 표현하고 싶으므로 Math.round(rateAverage*100)로 383.333...을 만들고
         * 나누가 100을 해서 3.83을 표현했다. Math.round(rateAverage*100)/100
         * 허나 이 방법은 소숫점이 5 이상라면 사용할 수 없다! (반올림이기 때문에)
         * 
         * 2. tofixed() 사용하기
         * 이 함수는 괄호 안에 몇 번째 소숫점까지 표기할건지 숫자를 적으면 거기까지 출력해준다.
         * 따라서 rateAverage.toFixed(2)를 사용하면 쉽게 해결 가능!
         */
    }
};

console.log(movie);
console.log(movie.averageRate())
