import { TodoProps } from "../App";

interface TodoItemProps {
  todo: TodoProps;
  handleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleComplete,
  handleDelete,
}) => {
  const { id, text, state } = todo;

  return (
    <div>
      <li key={id}>
        {text}
        <button onClick={() => handleComplete(id)}>
          {state ? "완료됨" : "미완료"}
        </button>
        <button onClick={() => handleDelete(id)}>삭제</button>
      </li>
    </div>
  );
};

export default TodoItem;
