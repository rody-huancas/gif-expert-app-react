
const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BZMTKzipA1qvFZOeGSbjhfW3EiOGjL4A&q=${category}&limit=10`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};


export default getGif;