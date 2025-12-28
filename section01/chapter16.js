// 1. 상수 객체

const animal = {
    type: "고양이",
    name: "낑깡",
    color: "cheese",
};

animal.age = 8; // 추가
animal.name = "이낑깡"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티

const person = {
    name: "이다정",
    sayHi() {
        console.log("안녕!");
    },
}

person.sayHi();
person["sayHi"]();