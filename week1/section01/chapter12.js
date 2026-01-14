// 1. 함수 표현식
// funcA는 호이스팅이 되지만, funcB(varB)는 안 됨

function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA(); // funcA

let varB = function () {
  // 익명함수
  //   console.log("funcB");
};

varB(); // funcB
// funcB(); // 오류

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
