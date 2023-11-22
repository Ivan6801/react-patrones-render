import "./App.css";
import { useTodos } from "../Context/useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

export function App() {
  const { todos, searchedTodos, openModal, setOpenModal } = useTodos();
  return (
    <>
      <TodoCounter />
      <TodoSearch openModal={openModal} setOpenModal={setOpenModal} />

      <TodoList searchedTodos={searchedTodos}>
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        )}
      </TodoList>
    </>
  );
}
