for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue; // 아래는 실행하지 않고 다음 반복 수행
    }
    console.log(idx);

    if (idx >= 5) {
        break; 
    }
} 