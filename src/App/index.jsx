import "./App.css";
import { useTodos } from "../Context/useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

export function App() {
  const { searchedTodos, searchValue, setSearchValue } = useTodos();
  return (
    <>
      <TodoCounter />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
