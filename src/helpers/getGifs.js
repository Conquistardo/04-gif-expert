export const getGifs = async (categoria) => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=5Pfoz9kjPuLfIqJw6bVzTlAmke6qC05b`;
    const respuesta = await fetch(urlApi);
    const {data} = await respuesta.json();
    const gifs = data.map(
        img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        }
    );
    return gifs;
}