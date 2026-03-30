// 1. 변수
let age;
// console.log(age); // 출력: undefined
age = 25;


// 2. 상수
// 변할 수 없거나, 변해선 안 되는 값
// 선언과 동시에 초기화가 반드시 필요
const birth = "2001.10.10";

// 3. 변수 명명 규칙(네이밍 규칙)
let $_name;
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 친절하고 의미 있는 변수명을 사용하자!
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
