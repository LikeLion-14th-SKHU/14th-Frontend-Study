// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
console.log(num6); // 30

// 3. 복합 대입 연산자
// 산술 + 대입 연산자

let num7 = 10;
num7 += 20;
console.log(num7); // 30

num7 -= 20; 
console.log(num7); // 10

// 4. 증감 연산자
let num8 = 10;
num8++;
console.log(num8); // 11

console.log(num8++); // 11 - 후위 연산
console.log(++num8); // 13 - 전위 연산

// 5. 논리 연산자
let or = true || false; // 하나만 참이면 참
let and = true && false; // 둘 다 참이여야 참
let not = !true; // boolean값 반전

console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2); // false true

let comp3 = 1 == "1";
console.log(comp3); // true 자료형이 달라도 값이 같으면 true

let comp4 = 2 > 1;
let comp5 = 2 < 1;
console.log(comp4, comp5); // true false

let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
console.log(comp6, comp7); // true true