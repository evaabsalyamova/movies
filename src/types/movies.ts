export interface IFilm {
  name: string;
  id: number;
  year: number;
  poster: string;
}

export interface IExternalFilm {
  nameOriginal: string;
  kinopoiskId: number;
  year: number;
  posterUrlPreview: string;
}

export interface IExternalFilmsData {
  items: IExternalFilm[];
  total: number;
  pages: number;
}

export const filmsMapper = (externalFilms: IExternalFilmsData): IFilm[] => {
  return externalFilms.items.map((externalFilm) => ({
    name: externalFilm.nameOriginal,
    id: externalFilm.kinopoiskId,
    year: externalFilm.year,
    poster: externalFilm.posterUrlPreview,
  }));
};
