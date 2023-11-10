
const URL_API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default async function listGenres(genreId: number) {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  }

  let response = await fetch(`${URL_API}discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}`, {
    method: "GET",
    headers: headersList
  });

  let data = await response.json();
  console.log(data);
  return data;
}