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
    <form className="main__form" onSubmit={onSumbit}>
      <input
        type="text"
        className="main__input"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="main__button">Buscar</button>
    </form>
  );
};
