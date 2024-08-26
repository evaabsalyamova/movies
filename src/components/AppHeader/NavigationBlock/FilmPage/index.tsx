import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { getFilmByID } from "../../../../api/movies";
import { IDetailedFilm, filmDetailedMapper } from "../../../../types/movies";

const FilmPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<undefined | IDetailedFilm>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const filmPromise = getFilmByID({ filmId: Number(id) });
    filmPromise.then((data) => setFilm(filmDetailedMapper(data)));
  }, [id]);

  if (!film) {
    return <>film is not available</>;
  }
  return (
    <div className="filmPage">
      <div className="posterBlock"></div>

      <div className="filmInfoBlock">
        <div className="filmName">{film.name}</div>
        <div className="filmYear">{film.year}</div>
      </div>
    </div>
  );
};

export default FilmPage;
