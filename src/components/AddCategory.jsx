import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSumbit = (e) => {
    e.preventDefault();

    if (inputValue.trim() <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSumbit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
