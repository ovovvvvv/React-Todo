import TodoList from "./components/TodoList";
import "./App.css";
import { useTodo } from "./hooks/useTodo";

const App: React.FC = () => {
  const { todos, inputText, onChange, onClick, handleComplete, handleDelete } =
    useTodo();
  return (
    <div className="container">
      <h1>투두리스트 ~~~ 🍀</h1>

      <input type="text" onChange={onChange} value={inputText} />
      <button type="submit" onClick={onClick}>
        +
      </button>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
