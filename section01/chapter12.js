// 1. 함수 표현식 
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력됨
varA(); // funcA

let varB = function () {
    console.log("funB");
}

varB(); // 호이스팅 안 됨
// funcB(); // 오류 발생, 변수의 이름을 불러야 됨


// 2. 화살표 함수
let varC = () => {
    return 1;
}
let varD = () => 1;

console.log(varC()); // 1
console.log(varD()); // 1

let varE = (value) => value + 1;
console.log(varE(10)); // 11

let varF = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varF(10));
// 10
// 11