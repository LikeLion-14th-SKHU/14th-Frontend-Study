// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four, five = 5] = arr;
// console.log(one, two, three, four, five); // 1 2 3 undefined 5

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정혁",
  age: 24,
  hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age: myAge, hobby, extra, sex = "male" } = person; // myAge라는 변수에 age값을
// console.log(name, myAge, hobby, extra, sex); // 이정혁 24 테니스 undefined male

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 이정혁 24 테니스 undefined
};

func(person);
