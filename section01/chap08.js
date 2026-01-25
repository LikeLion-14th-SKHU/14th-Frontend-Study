// 1. null 병합 연산자
// -> nul, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

console.log(var4);

let userName = "윤현승";
let userNickName = "YHS";

let displayName = userName ?? userNickName;

console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환함

let var7 = 1;

var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3.삼항 연산자
// -> 항을 3개 사용

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수라면 "짝", 아니면 "홀"

let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
