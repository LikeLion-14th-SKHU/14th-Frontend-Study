import { useReducer } from "react";

function reducer(state, action) {
  // state값과 action객체를 인수로 받음
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      // 상태 변화 요청, 액션 객체
      type: "INCREASE", // 상태를 어떻게 변화시킬지
      data: 1, // 얼마나 변화시킬지
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
