import { IExternalFilms } from "../types/movies";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const getFilms = async (): Promise<IExternalFilms> => {
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
