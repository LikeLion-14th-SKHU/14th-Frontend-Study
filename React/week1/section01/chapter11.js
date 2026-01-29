// 함수선언

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

// 함수
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;

  // console.log(area);
  return area;
  console.log("hello"); // 실행 안 됨
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문이 호출문보다 아래 있어도 문제가 없음
// -> 위로 끌어 올려주기 때문
