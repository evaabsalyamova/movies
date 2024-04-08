import { IExternalFilmsData } from "../types/movies";

const headers = {
  "X-API-KEY": "d565cdfc-210b-45be-8da0-5965ade46d28",
  "Content-type": "application/json; charset=UTF-8",
};

export const getFilms = async (): Promise<IExternalFilmsData> => {
  const response = await fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films",
    {
      method: "GET",
      headers,
    }
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};
