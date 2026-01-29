## 라이프사이클
- 생애 주기

### Mount
- 컴포넌트가 탄생하는 순간
- 화면에 처음 렌더링 되는 순간

### Update
- 컴포넌트가 다시 렌더링 되는 순간
- 리렌더링 될 때를 의미

### UnMount
- 컴포넌트가 화면에서 사라지는 순간
- 렌더링에서 제외 되는 순간을 의미

## useEffect
- 리액트 컴포넌트의 사이드 이펙트를 제어하는 Hook
  
### 사이드 이펙트
- 부수적인 효과
- 파생되는 효과

```jsx
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  // 의존성 배열
  // dependency array = deps
```

### 정리함수, 클린업
- `return () => {}`  이런식으로 useEffect 안에 return문이 화살표 함수로 되어있다면, 언마운트될 때(마지막에) 실행되는 코드라는 의미

## Chrome 확장 프로그램 "React Developer Tools"
- React를 사용한 페이지 개발자 모드에서 해체 분석 가능

## useReducer
- 컴포넌트 내부에 새로운 State를 생성하는 Hook
- 모든 useState는 useReducer로 대체 가능
- 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음
  - useState를 사용하면 컴포넌트 내부에 상태 관리 코드를 작성해야 했음

### reducer
- 변환기
- 상태를 실제로 변환시키는 변환기 역할

### dispatch
- 발송하다, 급송하다
- 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수