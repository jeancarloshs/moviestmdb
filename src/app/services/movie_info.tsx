
const URL_API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default async function movieInfo(movieId: number) {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  }

  let response = await fetch(`${URL_API}movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`, {
    method: "GET",
    headers: headersList
  });

  let data = await response.json();
  console.log(data);
  return data;
}