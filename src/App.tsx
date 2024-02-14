import { useState, useCallback, useRef, ChangeEvent } from "react";
import "./App.css";

interface TodoProps {
  id: number;
  text: string;
  state: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: 0,
      text: "오늘은",
      state: false,
    },
    {
      id: 1,
      text: "초코케익 먹는날",
      state: false,
    },
    {
      id: 2,
      text: "김민우 바보 ㅋㅋ",
      state: false,
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [complete, setComplete] = useState("완료");

  const nextId = useRef<number>(3);

  const onInsert = useCallback(() => {
    const todo = {
      id: nextId.current,
      text: inputText,
      state: false,
    };
    setTodos(todos.concat(todo));
    setInputText("");
    nextId.current += 1;
  }, [inputText]);

  const onClick = useCallback(() => {
    onInsert();
  }, [onInsert]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleComplete = useCallback(() => {
    setComplete("완료됨");
  }, []);

  return (
    <div className="container">
      <h1>투두리스트 ~~~ 🥱🥺🍀</h1>

      <input type="text" onChange={onChange} value={inputText} />
      <button type="submit" onClick={onClick}>
        +
      </button>
      <div className="todoList">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={handleComplete}>{complete}</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default App;

/* 
할 일을 입력 받을 수 있어야 한다.
 입력 받은 할 일 목록을 추가한 순서에 맞게 화면에 출력해야 한다.
 생성된 할 일의 완료 버튼을 클릭시 complete 상태를 변경해야 한다.
 생성된 할 일의 제거 버튼 클릭시 할 일이 할 일 목록에서 제거 되어야 한다.
 할 일 목록을 TodoList 컴포넌트로 할 일을 TodoItem 컴포넌트로 구현한다.
*/
