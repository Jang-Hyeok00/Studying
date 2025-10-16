//배열 생성 방법
let array = [52, 273, '아침밥', '점심밥', true, false];
console.log(array);

//배열 생성하고 요소에 접근
array[0] = 0;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

// for 반복문
for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 10; i > 0; i--) {
    console.log(i);
}


// for 반복문을 이용한 곱셈
console.log('------------------');
//변수를 선언
let output = 1; // 초기값을 0으로 놓으면 무엇을 곱해도 0이 됨, 그래서 1로 설정

for(let i = 1; i <= 20; i++) {
    output *= i;
}
console.log(output);


// 역 for 반복문
console.log('------------------');
//배열을 생성
let array1 = [1, 2, 3, 4, 5, 6];

//요소의 길이를 출력
for(let i = array1.length - 1; i >= 0; i--) {
    console.log(array1[i]);
}


// for in 반복문과 for of 반복문
//변수를 선언합니다.
let array2 = ["사과", "배", "포도", "딸기", "바나나"];

//반복을 수행합니다.
for(let i in array2) {
    //출력합니다.
    console.log(`${i}번째 요소: ${array2[i]}`);
}

console.log('------------------');

//반복을 수행합니다.
for (let item of array2) {
    //출력합니다.
    console.log(item);
}

console.log('------------------');
// for ... in
const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}

for(let key in yujin) {
    console.log(key);
}

console.log('------------------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray) {
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

// for ... of
for (let value of iveMembersArray) {
    console.log(value);
}

//반복문을 여러 번 중첩 해서 사용
for(let i =0; i < 3 ; i++) {
    for(let j = 3; j > 0; j--) {
    console.log(i, j);
    }
}

// * 를 이용해서 6 x 6의 정사각형을 출력해라
let square = '';
let size = 6;

for(let i=0; i < size; i++) {
    for(let j=0; j < size; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);
console.log('------------------');


// 별 피라미드 1
let output2 = '';

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        output2 += '*';
    }
    output2 += '\n';
}

console.log(output2);
console.log('------------------');

// 별 피라미드 2
let output3 = '';

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 - i; j++) {
        output3 += ' ';
    }
    for (let j = 0; j < i + 1; j++) {
        output3 += '*';
    }
    output3 += '\n';
}

console.log(output3);
console.log('------------------');


/**
 * while
 */
let number = 0;

while(number < 10) {
    number++;
}

console.log(number);

/**
 * do ... while
 * - 잘 사용하지 않음(헷갈려)
 */

number = 0;

do {
    number++;
} while(number < 10);
console.log(number);

// break 키워드(반복문 벗어날 때 사용)
console.log('------------------');

for(let i=0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log('------------------');

number = 0;
while(number < 10) {
    if(number === 5) {
        break;
    }
    number++;
    console.log(number);
}

console.log('------------------');
// continue 키워드(반복문을 내부에서 현재 반복을 멈추고 다음 반복을 진행 함)
// skip을 의미
for(let i=0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

console.log('------------------');

number = 0;
while(number < 10) {
    number++;
    if(number === 5) {
        continue;
    }

    console.log(number);
}

console.log('------------------');
// 스코프 내부에서 이름 중복
let a = 1;
let b = 1;
{
    let a = 2;
    {
        let a = 3;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

// 타입 변환
console.log('------------------');

let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('-------------------');

// 명시적 변환 몇가지 더 배우기
console.log(typeof (99).toString(),(99).toString());
console.log(typeof (true).toString(),(true).toString());
console.log(typeof (Infinity).toString(),(Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

// boolean 타입으로 변환
//String에 무언가 값이 있을때 boolean 기준으로 true
console.log('-------------------');

console.log(!!'xsadfsa');

console.log(!!'');

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

