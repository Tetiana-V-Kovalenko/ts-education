import React, { useState } from "react";
import { IItems } from "../types/todos";

interface IProps {
  onAddTodo: (todo: IItems) => void;
}

type OnlyTitle = Pick<IItems, "title">;

const Addtodo: React.FC<IProps> = (props) => {
  const [todo, setTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({
      title: e.target.value,
    });
  }

  function submitHandler(e: React.FormEvent): void {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItems);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};
export default Addtodo;
