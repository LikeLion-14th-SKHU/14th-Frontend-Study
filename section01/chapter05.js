// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; // Not a Number

console.log(1 * "hello"); // NaN;

// 2. String Type
// 꼭 따옴표를 사용하자
let myName = "이다정"; 
let myLocation = "방배"
let introduce = myName + myLocation;
console.log(introduce);

// ``(백틱)을 사용하면 변수의 값을 동적으로 문자열에 포함시킬 수 있다.
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(아무것도 없다)
// 직접 명시적으로 변수에 할당해야 되는 값
let empty = null;


// 5. Undefined Type
// 변수에 어떠한 값도 집어넣지 않았을 때 자동으로 할당되는 값
let none;
console.log(none);

