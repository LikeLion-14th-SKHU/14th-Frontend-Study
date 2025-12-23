// 1. 콜백함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함

function main(value) {
    console.log(1);
    console.log(2);
    value(); // 원하는 타이밍에 호출할 수 있다.
    console.log("end");
}

function sub() {
    console.log("i am sub");
}

main(() => {
    console.log("i am sub");
});

// 2. 콜백함수 활용
function repeat(count, callback) {
    for(let i = 1; i <= count; i++) {
        callback(i);
    }
}


repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
})

repeat(5, (i) => {
    console.log(i * 3);
})