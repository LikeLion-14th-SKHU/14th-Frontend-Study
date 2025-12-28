// 함수 선언
function greeting () {
    console.log("안녕하세요!"); 
}

console.log("호출 전");
greeting();
console.log("호출 후");

// 함수 만들기
function getArea(width, height) {
    function another() {
        console.log("another");
    }
    another(); // another
    let area = width * height;
    return area;
    console.log("hello"); // 수행 안 됨
}

let area1 = getArea(10, 20); 
console.log(area1); // 200
let area2 = getArea(20, 30);
console.log(area2); // 600

// 호이스팅 -> 끌어올리다
// 선언문을 호출문 보다 아래에 적어도 끌어올려서 실행해준다