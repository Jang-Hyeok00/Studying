// 객체Object 안에 함수를 추가할 수 있다.
// 중복으로 되어 있는 부분은 객체에서 Keyword인 this로 표현을 한다.
// key : value
let yujin = {
    //property
    name : '안유진',
    group : '아이브',
    //method
    dance : function() {
        return '안유진이 춤을 춥니다.';
    }
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin['name']);

const key = 'name'
console.log(yujin[key]);

console.log(yujin.dance());

// this라는 키워드는 현재 함수가 정의된 객체를 가리킨다.

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yujin2);
console.log(yujin2.dance());

// 존재하지 않는 key를 넣었을 때 새로운 Property 가 추가된다.

yujin2['group'] = '연암공대';
console.log(yujin2);

yujin2['englishName'] = 'An Yu Jin';
console.log(yujin2);

delete yujin2['englishName'];
console.log(yujin2);

// const로 선언한 변수는 변경 할 수가 없는데??
// const로 선언한 객체(Object)는 속성을 변경 할 수 있다.

const wonYoung = {
    name : '장원영',
    group : '아이브',
}
console.log(wonYoung);

//wonYoung = {}; -새로운 객체로 변경(오류남)

// 객체 안의 property(속성)이나 메서드는 변경 할 수 있다!
wonYoung['group'] = '연암공대';
console.log(wonYoung);

// 모든 key 값 다 가져오기
console.log(Object.keys(wonYoung));

// 모든 value 값 다 가져오기
console.log(Object.values(wonYoung));

// key 와 value의 이름이 같을 때 하나만 해도 된다.
const name = '안유진';

const yujin3 = {
    //name : name,
    name,
};
console.log(yujin3);

//for ~in 반복문
// 객체 속성 순회 : 객체의 각 키(key)를 순회 하며, 해단 key를 사용하여 value에 접근한다.
let object = {
    name: '바나나',
    price: 1200
};

for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}

//다양한 자료형의 객체
let object2 = {
    number: 273,
    string: 'RintIanTta',
    boolean: true,
    array: [52, 273, 103, 32],
    method: function () {}
};

//메서드: 객체(Object)의 속성(property)중 자료형(Data type)이 함수(Function)인 속성
//메서드 내부에서 this 키워드
let object3 = {
    name: '바나나',
    price: 1200,
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)
    }
};
object3.print();

// Copy by value, copy by reference
/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * Primitive : Object(배열, 함수 포함)를 제외한 생성된 모든 데이터 타입
 */

// 1)번 예제
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('------------------');
console.log(original);
console.log(clone);

//객체는 copy by reference 이다.(변경된 부분이 참조가 되어서 같이 변경이 된다.)
// 2)번 예제

let originaOBJ = {
    name : '안유진',
    group : '아이브',
};
let cloneOBJ = originaOBJ;

console.log(originaOBJ);
console.log(cloneOBJ);

originaOBJ['group'] = '연암공대';
console.log('------------------');

console.log(originaOBJ);
console.log(cloneOBJ);

console.log(originaOBJ === cloneOBJ);
console.log(original === clone);

// Object 안에 값이 같다고 해서 같지는 않다.
originaOBJ = {
    name : '안유진',
    group : '연암공대',
};

cloneOBJ = {
    name : '안유진',
    group : '연암공대',
};
console.log(originaOBJ === cloneOBJ); // 즉, 다른 메모리에 저장이 되기에 false 이다.

//퀴즈 : Copy by value / Copy by reference
const yujin1 = {
    name : '안유진',
    group : '아이브',
};

const yujin4 = yujin1;
const yujin0 = {
    name : '안유진',
    group : '아이브', 
};

//결과값은?
console.log(yujin1 === yujin4); //true
console.log(yujin1 === yujin0); //false
console.log(yujin4 === yujin0); //false

// 객체(Object)에서 spread operator
const yujin5 = {
    ...yujin0,
};
console.log(yujin5);
console.log(yujin5 === yujin0); //false
// spread operator는 실제 메모리 공간에 다르게 저장 되기에 false

// speread operator에 값을 추가 할 수 있다.
const yujin6 = {
    year : 2003,
    ...yujin0,
};
console.log(yujin6)

// spread operator는 추가하는 위치가 중요하다. 즉, 위치에 따라서 값이 변경됨
const yujin7 = {
    name : '연암공대',
    ...yujin0,
};
console.log(yujin7); //name : '연암공대'로 변경했으니 spread operator가 이어서 실행이 됨

const yujin8 = {
    ...yujin0,
    name : '연암공대',
};
console.log(yujin8);//spread operator가 실행되고 name: '연암공대'로 변경함.

//배열도 동일하게 실행이 됨
const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);

//에러가 발생 했을 때: try... catch
/**
 * 에러를 발생 시킬 때 -> 던진다고 한다. throw
 * 명시적으로 인지 할 때 -> 잡는다고 한다. catch
 */
function runner() {
    try {
        console.log('Hello');

        throw new Error('큰 문제가 발생 하였습니다.');

        console.log('Yonam University');
    }
    catch(e) {
        console.log(`---------- Catch ----------`);
        console.log(e); // 에러 메시지 출력
    } finally { // 에러가 발생 하든 안하든 항상 실행할 코드
        console.log(`---------- finally ----------`);
    }
}
runner();
/**
 * 1) try ~ catch문은 코드 실행 중 발생 할 수 있는 오류, 즉 예외(error)를
 * 처리하여 프로그램의 비정상적인 중단을 막고 안정성을 높이는 구문이다.
 * 2) try 블록에 예상되는 오류를 일으킬 수 있는 코드를 작성
 * 3) catch 블록에는 오류 발생시 실행 할 코드 작성
 */