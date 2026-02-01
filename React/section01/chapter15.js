// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key: value
let person = {
    name: "이다정",
    age: 25,
    hobby: "수영",
    job: "FE Developer",
    extra: function A() {}, // value에 함수 사용 가능
    10: 20, // 숫자 값도 키로 사용 가능
    "like cat": true, // 띄어쓰기 사용된 문자열은 따옴표로 감싸기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 이다정

let age = person["age"]; // 쌍 따옴표 필수
console.log(age); // 25

let property = "hobby";
let hobby = person[property]; // 괄호 표기법은 변수에 키 값 담을 수 있음
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "developer";
person["favoriteFood"] = "곱창";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "cat" in person;
console.log(result2);