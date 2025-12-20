// 함수선언

// function greeting() {
//   console.log("안녕하세요");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;

  return area; // 종료됨
}

let area1 = getArea(10, 20);
console.log(area1);
