const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2;
animal.name = "까망이";

// 상수의 프로퍼티도 수정 가능하다. 상수 자체만 안바꾸면 됨

// 메서드
// 값이 함수인 프로퍼티

const person = {
  name: "윤현승",
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
