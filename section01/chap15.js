// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 객체 프로퍼티 (객체 속성)
let person = {
  name: "윤현승",
  age: 26,
  hobby: "죽기",
  job: "GPT",
  extra: {},
  10: 20,
  "like cat": true,
};

// 객체 프로퍼티 다루는 방법
// 특정 프로퍼티 접근법 = 점/괄호 표기법
let name = person.name; // 점 표기법
console.log(name);

let age = person["age"]; // 괄호 표기법 -> 동적일 때 사용
console.log(age);

// 새로운 프로퍼티 추가하는 방법
person.job = "fe";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];

// 프로퍼티 존재 유무 확인 in  연산자
let result1 = "name" in person; // 띄워쓰기에 영향받네
console.log(result1);
