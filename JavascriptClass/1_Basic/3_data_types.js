// Number Type
const age = 21;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('------------------');

// String Type
const collegeNmame = '"연"암공대';
console.log(collegeNmame);
console.log(typeof collegeNmame);

const ive = "'아이브' 안유진";
console.log(ive);

// Template Literal
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = `아이브\t장원영`;
console.log(iveWonYoung);
const backslash = `아이브\\연암공대`;
console.log(backslash);

const iveWonYoung2 = `아이브 '///////////
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + '안유진');
console.log(`${groupName} 안유진`);
console.log('------------------');

// Boolean Type (True or False)
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

let hours = (new Date()).getHours();
console.log(hours);
console.log(hours < 3 || hours > 20);

// Undefined
let noInit;
console.log(noInit);
console.log(typeof noInit);

// Null Type
console.log('------------------');
let init = null;
console.log(init);
console.log(typeof init);
console.log('------------------');

// Symbol Type
console.log('------------------');

const test1 = '1'
const test2 = '1'

console.log(test1 === test2);

const symbol1 = Symbol('1')
const symbol2 = Symbol('1')

console.log(symbol1 === symbol2);

// Object Type
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

// Array Type
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '연암공대';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);