// 단락평가
function returnFalse() {
    console.log("False 함수");
    return false; // falsy한 값도 해당
}

function returnTrue() {
    console.log("True 함수");
    return true; // truthy한 값도 해당
}

// 첫번째 피연산자의 값만으로도 이 연산을 확정할 수 있다면 두번째에는 접근 X
console.log(returnFalse() && returnTrue()); // False 함수 false

// 두번째 피연산자의 값도 알아야 하기 때문에 두번째에도 접근
console.log(returnTrue() && returnFalse()); // True 함수 False 함수 false

// 첫번째 피연산자의 값만으로도 이 연산을 확정할 수 있다면 두번째에는 접근 X
console.log(returnTrue() || returnFalse()); // True 함수 true


// 단락평가 활용 사례
function printName(person) {
    const name = person && person.name
    console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "이다정" }); // 이다정

// T || T: 첫번째 값 반환
// T && T: 두번째 값 반환