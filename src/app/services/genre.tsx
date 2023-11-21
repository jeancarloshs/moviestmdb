
const URL_API = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function genre() {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  }

  let response = await fetch(`${URL_API}genre/movie/list?api_key=${API_KEY}&language=pt-BR`, {
    method: "GET",
    headers: headersList
  });

  let data = await response.json();
  console.log(data);
  return data;
}