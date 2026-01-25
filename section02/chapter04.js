// 1. Spread 연산자
// 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려지는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3); // 1 2 3
}

funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수
// 여러 개의 매개변수를 받아야 할 때 배열로 한 번에 받아올 수 있도록 함

function funcB(one, two, ...rest) { // rest 매개변수 뒤에는 추가로 다른 매개변수를 가져올 수 없다
    console.log(rest); // 3
}

funcB(...arr1)