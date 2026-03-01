import { useState } from "react";
import { useRef } from "react";
// useRef는 리렌더링 X -> 렌더링에 영향을 미치지 않아야 하는 기능에 사용
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
  });
  const refObj = useRef();
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={"kr"}>한국</option>
          <option value={"uk"}>영국</option>
          <option value={"us"}>미국</option>
          <option></option>
        </select>
      </div>
    </div>
  );
};

export default Register;
