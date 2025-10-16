//산술 연산자
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 + 10);
console.log(10 % 10);
console.log(10 % 3);
console.log(10 % 10);
console.log('------------------');

console.log(10 * (10 + 10));

//증감 연산자
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('------------------');

//연산자의 위치
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

// 연산자가 변수 앞에 있는 거는 코딩에서 많이 사용하지 않음. 헷갈리니까.
result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

//숫자 타입이 아닌 Type에 +,-를 사용한다면?
// string에 +,-를 붙이면 number type으로 된다.
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample - true; // true는 1로 변환
console.log(sample);
console.log(typeof sample);

sample - false; // false는 0으로 변환
console.log(sample);
console.log(typeof sample);

sample = '안유진';
// NaN : Not a Number
console.log(+sample);

sample = '99';

console.log(-sample);
console.log(typeof -sample);

//할당 연산자 - 복합 대입 연산자
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);


// 비교 연산자
console.log('------------------');
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('------------------');
console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('------------------');

// 대소 관계 비교 연산자
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);

// 삼항 조건 연산자
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

// 논리 연산자
// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('------------------');
//|| 조건은 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('------------------');

console.log( 10 > 1 && 20 > 2 );
console.log( 10 < 1 && 20 > 2 );
console.log( 10 < 1 && 20 < 2 );

console.log('------------------');

console.log( 10 > 1 || 20 > 2 );
console.log( 10 < 1 || 20 > 2 );
console.log( 10 < 1 || 20 < 2 );

//논리 연산자에서의 단축 평가
// &&일 때 좌측이 true면 우측 값을 변환
// 좌측이 false면 좌측 값을 반환
// ||일 때 좌측이 true면 좌측 값을 반환
// 좌측이 false면 우측 값을 변환
console.log('------------------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

// 지수 연산자
console.log(2 ** 2);
console.log(10 ** 3);

//null 연산자
console.log('------------------');

let name
console.log(name);
// name이 null 일때 연암공대가 할당
name = name ?? '연암공대'
console.log(name);

// 위에서 name에 연암공대가 있기에 name은 연암공대임
name = name ?? '아이브'
console.log(name);

let name2;
name2 ??= '연암공대'
console.log(name2);