import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Developer"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <main className="main">
        <h1 className="main__title">GifExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </main>
    </>
  );
};

export default GifExpertApp;
