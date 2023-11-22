/* eslint-disable react/prop-types */
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
    </li>
  );
}
