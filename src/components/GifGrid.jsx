import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="main__subtitle">{category}</h3>
      {isLoading && <h2 className="main__loading">Cargando...</h2>}

      <div className="main__card">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
