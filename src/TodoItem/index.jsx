/* eslint-disable react/prop-types */
import "./TodoItem.css";
import { FaCheck as FaCheckIcon } from "react-icons/fa";
import { MdDelete as MdDeleteIcon } from "react-icons/md";

export function TodoItem(props) {
  return (
    <li className="TodoItem">
      <FaCheckIcon color="#000" onClick={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <MdDeleteIcon color="#000" onClick={props.onDelete} />
    </li>
  );
}
