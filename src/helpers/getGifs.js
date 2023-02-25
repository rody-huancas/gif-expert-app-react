
const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BZMTKzipA1qvFZOeGSbjhfW3EiOGjL4A&q=${category}&limit=20`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        username: img.username,
        profileUrl: img.user && img.user.profile_url,
    }));

    return gifs;
};


export default getGif;