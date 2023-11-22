/* eslint-disable react/prop-types */
import "./TodoList.css";

export function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
    </section>
  );
}
