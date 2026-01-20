// 1. 변수
let age;
// console.log(age);

age = 24;
// console.log(age);

// 2. 상수
const birth = "2002.12.30";
// birth = "123";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name; 에러!!!
let _2name;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let; 에러!!!
// let if; 에러!!!

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
