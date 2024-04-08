export interface IFilm {
  name: string;
  year: number;
  poster: string;
}

export interface IExternalFilm {
  nameEn: string;
  year: number;
  posterUrlPreview: string;
}

export interface IExternalFilms {
  items: IExternalFilm[];
}

export const filmsMapper = (externalFilms: IExternalFilm[]): IFilm[] => {
  return externalFilms.map((externalFilm) => ({
    name: externalFilm.nameEn,
    year: externalFilm.year,
    poster: externalFilm.posterUrlPreview,
  }));
};
