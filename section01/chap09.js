// 1. if 조건문
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상 입니다.");
} else {
  console.log("조건이 거짓입니다.");
}

// 2. Switch 조건문
// -> 다수의 조건을 처리할 때 더 직관적이다

let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
  }
  case "bear": {
    console.log("곰");
  }
  case "snake":
    console.log(뱀);
  case "tiger":
    console.log("호랑이");
  default: {
    console.log("그런 동물을 전 모릅니다 진짜로요");
  }
}
