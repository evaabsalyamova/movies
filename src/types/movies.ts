export interface IFilm {
  name: string;
  id: number;
  year: number;
  poster: string;
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

export const filmsMapper = (externalFilms: IExternalFilmsData): IFilm[] => {
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

  return externalFilms.items.map((externalFilm) => ({
    name: getFilmName(externalFilm),
    id: externalFilm.kinopoiskId,
    year: externalFilm.year,
    poster: externalFilm.posterUrlPreview,
  }));
};
