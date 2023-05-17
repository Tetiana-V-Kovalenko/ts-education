import React, { useState } from "react";
import TodoList from "./components/Todolist";
import AddTodo from "./components/AddTodo";
import { IItems } from "./types/todos";
const App: React.FC = () => {
  const [todos, setTodos] = useState<IItems[]>([]);

  function todoAddHandler(todo: IItems) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random().toString(), title: todo.title },
      ];
    });
  }

  function todoDeleteHandler(id: string): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
