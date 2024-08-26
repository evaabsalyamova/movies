export interface IFilm {
  name: string;
  id: number;
  year: number;
  poster: string;
}

export interface IDetailedFilm extends IFilm {
  largePoster: string;
  description: string;
  ratingAgeLimits: string;
  ratingKinopoisk: number;
  ratingImdb: number;
  filmLength: number;
}

export interface IExternalDetailedFilm extends IExternalFilm {
  posterUrl: string;
  description: string;
  ratingAgeLimits: string;
  ratingKinopoisk: number;
  ratingImdb: number;
  filmLength: number;
}

export interface IExternalFilm {
  kinopoiskId: number;
  year: number;
  posterUrlPreview: string;
  nameEn?: string;
  nameRu?: string;
  nameOriginal?: string;
}

export interface IExternalFilmsData {
  items: IExternalFilm[];
  total: number;
  pages: number;
}

export interface IGenre {
  id: number;
  genre: string;
}
export interface IFiltersData {
  genres: IGenre[];
}

export const filmsMapper = (externalFilms: IExternalFilm[]): IFilm[] => {
  const getFilmName = ({
    nameOriginal,
    nameEn,
    nameRu,
  }: IExternalFilm): string => {
    if (nameOriginal && nameOriginal.length > 0) {
      return nameOriginal;
    }
    if (nameEn && nameEn.length > 0) {
      return nameEn;
    }
    if (nameRu && nameRu.length > 0) {
      return nameRu;
    }
    return "Без названия";
  };

  return externalFilms.map((externalFilm) => ({
    name: getFilmName(externalFilm),
    id: externalFilm.kinopoiskId,
    year: externalFilm.year,
    poster: externalFilm.posterUrlPreview,
  }));
};

export const filmDetailedMapper = (
  externalFilm: IExternalDetailedFilm
): IDetailedFilm => {
  const getFilmName = ({
    nameOriginal,
    nameEn,
    nameRu,
  }: IExternalDetailedFilm): string => {
    if (nameOriginal && nameOriginal.length > 0) {
      return nameOriginal;
    }
    if (nameEn && nameEn.length > 0) {
      return nameEn;
    }
    if (nameRu && nameRu.length > 0) {
      return nameRu;
    }
    return "Без названия";
  };

  return {
    ...externalFilm,
    name: getFilmName(externalFilm),
    id: externalFilm.kinopoiskId,
    poster: externalFilm.posterUrlPreview,
    largePoster: externalFilm.posterUrl,
  };
};
