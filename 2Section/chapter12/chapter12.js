// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //변수로 선언된 함수는  호이스팅은 안됨.
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수 (이전보다 더 빠르게 생성)
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
