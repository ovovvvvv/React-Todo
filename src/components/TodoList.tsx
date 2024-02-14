import TodoItem from "./TodoItem";
import { TodoProps } from "../App";

type HandleCompleteType = (id: number) => void;
type HandleDeleteType = (id: number) => void;

interface TodoListProps {
  todos: TodoProps[];
  handleComplete: HandleCompleteType;
  handleDelete: HandleDeleteType;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
