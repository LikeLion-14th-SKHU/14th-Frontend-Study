// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// // console.log(returnFalse() && returnTrue()); // False 함수
// // console.log(returnTrue() && returnFalse()); // True 함수, False 함수
// // console.log(returnTrue() || returnFalse()); // True 함수

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  // if문이 필요 없어지는 구조
  const name = person && person.name; // name에 Truthy, Falsy 결정
  console.log(name || "person의 값이 없음");
}

printName(); // 인수가 없어서 undefined -> "person의 값이 없음"
printName({ name: "이정혁" });
