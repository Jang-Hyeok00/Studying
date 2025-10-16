// 함수

// let 함수 = > { }가 되면 화살표 함수가 될 수 있음.
let 함수 = function () {
    //익명함수
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

// 선언적 함수
함수();
console.log(함수);

console.log('------------------');
// 2라는 숫자에 *10 / 2 % 3 의 결과 값을 String으로 변환해서 출력하고 싶으면

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**위에서 2 또는 3만 입력하고 나머지는 함수로 정의 하면 되겠죠?
 * 위 코드에서 반복되는 부분을 함수로 만들어라
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

calculate();

// 매가변수가 한 개인 경우
// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);

// 매개변수가 여러 개인 경우

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

// return 하는 함수의 기본 형태

function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(5, 4);
console.log(result2);

// Min 부터 max까지 숫자를 곱해 리턴하는 함수를 생성 호출

function multiply(min, max) {
    let output = 1;
    for (let i = min; i <= max; i++) {
        output *= i;
    }
    return output;
}

console.log(multiply(1, 10));

// 조건문을 활용한 매개 변수 초기화

function print(name, count) {
    if (typeof(count) == "undefined") {
        count = 1;
    }
    console.log(`${name}이/가 ${count}개 있습니다.`)
}

print("사과");

//디폴트 매개 변수를 활용한 매개 변수 초기화

function print(name, count = 1) {
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과");

// Arrow 함수의 기본 형태
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

// Arrow 함수를 간단하게 만든 형태
const multiply3 = (x, y) => x * y;
console.log(multiply3(5, 5));

// Arrow 함수에서 매개 변수가 하나인 형태
const multiply4 = x => x *2;
console.log(multiply4(2));

// Arrow 함수에서 매개변수 x, y, z를 함수의 함수로 할때
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

// 위 내용을 풀어서 해보면
function multiply6(x) {
    return function(y) {
        return function(z)  {
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

// Arrow 함수를 일반 함수 형태로 표현 할 수 있다.

//                = (x,y) => {}
const multiplyTwo = function(x, y) {
    return x * y
}
console.log(multiplyTwo(4, 7));

// 함수안에 keyword인 arguments를 했을 때 출력이 각 index값을 주는 것으로 보인다.
const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log('------------------');
console.log(multiplyThree(4, 5, 6));

//parameter를 무한정 받을 경우 ... -> 향후 Object에서 자세히 다룸
const multiplyAll = function (...argument) {
    return Object.values(argument).reduce((a,b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 함수의 이름이 없고 즉시 실행하는 함수(immediately invoked function) 형태
(function(x, y) {
    console.log(x * y);
}) (4, 9)

// 함수 이름 instanceof Object
console.log(typeof multiply);
console.log(multiply instanceof Object); //함수는 Object 이다.

//Array를 변경 시키는 함수

//Array 형태로 주어졌을 때
let iveMembers = [
     '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

//push() - 배열 리스트 마지막에 추가함 [스택]
console.log(iveMembers.push('변유찬'));
console.log(iveMembers);

console.log('------------------');

// pop() - 배열의 끝의 값을 제거
console.log(iveMembers.pop());
console.log(iveMembers);

// Shift() - 배열의 앞에 있는 값을 제거
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() - 배열의 앞에 값을 추가(push와 같은데 앞에 추가)
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('wwwffffwww')
// splice() - 0번 index부터 3개를 삭제
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

// 새로운 함수를 반환 해 주는 메소드

//Array를 다시 설정(앞 예제에서 삭제되었기에)
iveMembers = [
     '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log(iveMembers);

console.log('------------------');


//concat 함수 - push 함수 비슷
console.log(iveMembers.concat('연암공대'));
console.log(iveMembers);

console.log('------------------');

// slice 함수 - splice 함수과 비슷함
console.log(iveMembers.slice(0, 3));
// 제거해야할 index + 1 값을 넣어야 함(즉, 3은 index 0~2까지)
console.log(iveMembers);

console.log('------------------');
/**
 * concat과 slice는 push와 splice동작과 비슷하지만
 * iveMemvers라는 새로운 메모리에 저장이 되기에
 * 기존의 iveMembers 메모리에 추가나 삭제가 되지
 * 않아서 원래 저장되었던 메모리의 내용이 나옴
 */


// spread opersator (...) - iveMembers의 리스트를 펼쳐 보인다
// 즉, 새로운 array로 됨. 메모리 공간이 다르다는 의미
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

//spread operator (...) 안했을 시 리스트안에 리스트로 표현됨
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('------------------');

// 바로 할당 했을 시
let iveMembers4 = iveMembers;

console.log(iveMembers);
console.log(iveMembers4 === iveMembers);

// !!Spread operator와 비교시에는 새로운 Array가 생성됨.
// 즉, 메모리에 저장된 부분이 다르기에 false 이다.!!
console.log([
    ...iveMembers,
] === iveMembers );

console.log('------------------');


// 많이 사용하는 함수 -join, sort, map

// join() - 리스트에 있는 값들을 콤마(,) 기준으로 string으로 엮을 때 typeof로 확인하면 string임
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() - 오름차순으로 정렬
// reverse() - 내림차순으로 정렬
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

console.log('------------------');

// map() - Array에 있는 모든 값들을 순회하면서 그 각각의 값들을 변형 시켜 주는 역할을 함.
// 원래 array는 바꾸지 않고 새로운 array로 반환해준다.
console.log('------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));

console.log(iveMembers);

console.log('------------------');

// filter() - 리스트에 있는 값들을 찾는 기능
// true이면 리스트 값 반환
// false이면 반환 되지 않음
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));

// find() - 리스트에 있는 값 들중 첫번째 값 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() - 리스트에 있는 값 index 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
                       //  [    콜백함수   ]  ㄴ 초기값
                       //   1  2       3 
                       //   4  5       6
                       //   7  ... 
/**                  
 * 1. 초기값인 0이 p에 입력된다. 
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 어레이에서 두번째 값인 8이 n에 입력된다.
 * 6. p+n 즉, 1+8의 결과값인 9가 반환된다.
 * 7. 6에서 반환된 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복
 * 결국 모든 값을 다 더한 25가 반환된다.
 */

