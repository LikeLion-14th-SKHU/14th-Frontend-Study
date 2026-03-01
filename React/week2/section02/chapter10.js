// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1); // Wed Dec 24 2025 22:48:21 GMT+0900 (한국 표준시)

let date2 = new Date("2002/12/30/10:10:10"); // . 또는 / 또는 , 또는 - 가능
// console.log(date2); // Mon Dec 30 2002 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1); // 1766584322087

let date4 = new Date(ts1);
// console.log(date4); // Wed Dec 24 2025 22:52:27 GMT+0900 (한국 표준시)
// date1과 같은 값

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds); // 2025 12 24 22 54 46

// 4. 시간 수정하기
date1.setFullYear(2026);
date1.setMonth(3);
date1.setDate(8);
date1.setHours(23);
date1.setMinutes(0);
date1.setSeconds(0);

// console.log(date1); // Wed Apr 08 2026 23:00:00 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Wed Apr 08 2026
console.log(date1.toLocaleString()); // 2026. 4. 8. 오후 11:00:00
