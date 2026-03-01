// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// => 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // [4, 1, 2, 3, 5, 6]
let arr2 = [4, ...arr1, 5, 6]; // [4, 1, 2, 3, 5, 6]
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  //   a: obj1.a,
  //   b: obj1.b,
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2); // {a: 1, b: 2, c: 3, d: 4}

function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3); // 1 2 3
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// rest 뒤에는 추가로 변수를 둘 수 없음
// 변수명이 rest가 아니어도 됨 (args, ds, ...)
function funcB(one, ...rest) {
  console.log(rest); // [2, 3]
}

funcB(...arr1);
