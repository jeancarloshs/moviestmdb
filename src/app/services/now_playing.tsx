const URL_API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default async function nowPlaying() {
  try {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let response = await fetch(`${URL_API}movie/now_playing?api_key=${API_KEY}&language=pt-BR`, {
      method: "GET",
      headers: headersList
    });

    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    if (Array.isArray(data)) {
      data.forEach((results: any) => {
        console.log("INDEX:", results);
      });
    } else {
      console.log("Error: Response is not an array");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to propagate it up
  }
}
