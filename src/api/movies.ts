import {
  IExternalFilm,
  IExternalFilmsData,
  IFiltersData,
} from "../types/movies";

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
export const getGenres = async (): Promise<IFiltersData> => {
  const response = await fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",
    {
      method: "GET",
      headers,
    }
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};

export const getFilmesByGenre = async ({
  genreId,
}: {
  genreId: number;
}): Promise<IExternalFilmsData> => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genreId}`,
    {
      method: "GET",
      headers,
    }
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};
