import React from "react";
import { IItems } from "../types/todos";

interface IProps {
  todos: IItems[];
  onDelete: (id: string) => void;
}
// interface IState {
//   count: number;
// }
const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h2>
              {todo.id}
              {todo.title}
            </h2>
            <button onClick={props.onDelete.bind(this, todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
// class TodoList extends React.Component<IProps, IState> {
//   stateHandler() {
//     this.setState(({ count }) => {});
//   }
//   render() {
//     return null;
//   }
// }
export default TodoList;
