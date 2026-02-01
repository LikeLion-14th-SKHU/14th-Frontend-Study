// 1. Data 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997-01-07/10:10:10"); // 1997, 1, 7, 23, 59, 59 이렇게 쓸 수도 있음
console.log(date2);

// 2. 타임 스탬프
// 특성 시간이 "1970.01.01시 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 순간
let ts1 = date1.getTime(); // getTime() : 현재 시간의 타임 스탬프를 계산해서 반환
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4) // 같다!

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 현재보다 -1로 반환됨
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds,
);

// 4. 시간 수정하기
// date1.setFullYear(2023);
// date1.setMonth(2); // 3월
// date1.setDate(30);
// date1.setHours(23);
// date1.setMinutes(59);
// date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString()); // 현지화