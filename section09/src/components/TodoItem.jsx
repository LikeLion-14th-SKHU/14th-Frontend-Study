import "./TodoItem.css";
import { memo } from "react";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // True 반환 시 Props 바뀌지 않음 -> 리렌더링X
//   // False 반환 시 Props 바뀜 -> 리렌더링O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.id) return false;
//   if (prevProps.content !== nextProps.id) return false;
//   if (prevProps.date !== nextProps.id) return false;

//   return true;
// });

export default memo(TodoItem);
