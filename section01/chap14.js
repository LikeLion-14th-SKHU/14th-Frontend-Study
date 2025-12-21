// 스코프
// -> 전역 스코프/지역 스코프

let a = 1; // 전역 스코프

function funcA() {
  console.log(a);
  let b = 2; // 지역 스코프
}

funcA();
// console.log(b);

if (ture) {
  let c = 1;
}

//조건문 반복문 안에도 지역이다
