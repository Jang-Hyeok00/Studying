// if 조건문의 예제 : 홀수 짝수 구분
let input = 32;

if (input % 2 ==0) {
    console.log('짝수입니다.');
}

if (input % 2 == 1) {
    console.log('홀수입니다.');
}

// 오전 오후 구하기
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


//오전과 오후 구분하기
let date2 = new Date();

if (date2.getHours() < 12) {
    console.log('오전입니다.');
}

if (12 <= date2.getHours()) {
    console.log('오후입니다.');
}

//홀수 짝수 2
let input2 = 32;

if (input2 % 2 == 0) {
    console.log('짝수입니다.');
} else {
    console.log('홀수입니다.');
}

//오전 오후 2
let date3 = new Date();

if (date3.getHours() < 12) {
    console.log('오전입니다.');
} else {
    console.log('오후입니다.');
}

//중첩 조건문
let date4 = new Date();
let hours = date4.getHours();

if (hours < 11) {
    console.log("아침 먹을 시간입니다.");
} else {
    if (hours < 15) {
        console.log("점심 먹을 시간입니다.");
    }
    else {
        console.log("저녁 먹을 시간입니다.");
    }
}

//if else if 조건문
let date5 = new Date();
let hours2 = date5.getHours();

if (hours2 < 11) {
    console.log("아침 먹을 시간입니다.");
} else if (hours2 < 15) {
    console.log("점심 먹을 시간입니다.");
} else {
    console.log("저녁 먹을 시간입니다.");
}

//if else if 조건문2
let number = 5;

if(number % 2 === 0) {
    console.log('number 변수는 짝수 입니다.');
} else {
    console.log('number 변수는 홀수 입니다.');  
}

if(number % 2 === 0) {
    console.log('2의 배수 입니다.');
} else if(number % 3 === 0) {
    console.log('3의 배수 입니다.');
} else if(number % 4 === 0) {
    console.log('4의 배수 입니다.');
} else if(number % 5 === 0) {
    console.log('5의 배수 입니다.');
} else {
    console.log('2,3,4,5의 배수가 아닙니다.');
}


// switch 조건문
const englishDay = 'friday';

let koreanDay;

switch(englishDay) {
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;
}

console.log(koreanDay);


// break 키워드를 사용하지 않는 switch 조건문
let date6 = new Date();

switch(date6.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
        console.log('겨울입니다.');
        break;
    case 3:
    case 4:
    case 5:
        console.log('봄입니다.');
        break;
    case 6:
    case 7:
    case 8:
        console.log('여름입니다.');
        break;
    case 9:
    case 10:
    case 11:
        console.log('가을입니다.');
        break;
    default:
        console.log('으디 행성에서 오셨소?');
        break;
}

// 조건 연산자를 활용한 변수 초기화
let test;
console.log(typeof(test));

test = typeof(test) != 'undefined' ? test : '초기화 1';
console.log(typeof(test));
console.log(test);

test = typeof(test) != 'undefined' ? test : '초기화 2';
console.log(typeof(test));
console.log(test);

// 위 예제를 조건문으로 변경

let test2;
console.log(test2);

if (typeof(test2) == 'undefined') {
    test2 = '초기화 1';
}
console.log(test2);

if (typeof(test2) == 'undefined') {
    test2 = '초기화 2';
}
console.log(test2);