const URL_API = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function nowPlaying() {
  try {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
    }

    let response = await fetch(`${URL_API}movie/now_playing?api_key=${API_KEY}&language=pt-BR`, {
      method: "GET",
      headers: headersList
    });

    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    console.log("DATA:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    console.error("Request URL:", `${URL_API}movie/now_playing?api_key=${API_KEY}&language=pt-BR`);
    throw error; // Re-throw the error to propagate it up
  }
}
