import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
// props가 반복되고 많은 경우 spread 연산자로 전달 가능
// 자식 요소도 전달 가능
// state의 기능별로 분리해주면 성능 올라감 -> 불필요한 리렌더링 발생X

function App() {
  return (
    <>
      <Register></Register>
    </>
  );
}

export default App;
