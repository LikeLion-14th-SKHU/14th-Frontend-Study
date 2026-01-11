import "./Main.css";

// 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. -> if, for문 불가능
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 -> 객체는 점 표기법으로 해줘야함
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 ㅌㅐ그는 반드시 하나여야 한다 -> 빈태그로 묶어줘도 됨
const Main = () => {
  const number = 10;
  const user = {
    name: "이정환",
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};
export default Main;
