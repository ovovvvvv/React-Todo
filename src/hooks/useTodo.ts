import { ChangeEvent, useRef, useState } from "react";

export interface TodoProps {
  id: number;
  text: string;
  state: boolean;
}

export const useTodo = () => {
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: 0,
      text: "오늘은",
      state: false,
    },
    {
      id: 1,
      text: "투두리스트 추가구현",
      state: false,
    },
    {
      id: 2,
      text: "양주가서 놀기",
      state: false,
    },
  ]);

  const [inputText, setInputText] = useState("");

  const nextId = useRef<number>(3);

  const onInsert = () => {
    setTodos((prevTodos) => {
      const todo = {
        id: nextId.current,
        text: inputText,
        state: false,
      };
      return [...prevTodos, todo];
    });
    setInputText("");
    nextId.current += 1;
  };

  const onClick = () => {
    onInsert();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    inputText,
    onInsert,
    onClick,
    onChange,
    handleComplete,
    handleDelete,
  };
};
