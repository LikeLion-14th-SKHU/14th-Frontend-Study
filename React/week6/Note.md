## useMemo
- 메모이제이션 기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅

## React.memo
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
```jsx
// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> props 바뀌지 않음 -> 리렌더링 X
  // F -> props 바뀜 -> 리렌더링 O

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
```

1. 기능
2. 최적화

## React Context
- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음
- 중간 다리를 건너지 않고 직빵으로 데이터를 받아서 사용할 수 있음