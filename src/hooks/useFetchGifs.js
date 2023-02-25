import { useEffect, useState } from "react";
import getGif from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImage = await getGif(category);
        setImages(newImage);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }
}

export default useFetchGifs