/* eslint-disable react/prop-types */
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca..."
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}
