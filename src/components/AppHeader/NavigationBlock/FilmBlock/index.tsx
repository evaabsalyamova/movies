import { useEffect } from "react";
import { RootState, addGenres, addInitialFilms } from "../../../../redux";
import FilmList from "./FilmList";
import "./styles.css";
import { getFilms, getGenres } from "../../../../api/movies";
import { filmsMapper } from "../../../../types/movies";
import { useDispatch, useSelector } from "react-redux";
import GenresItem from "./FilmList/GenresItem";

const FilmBlock: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state: RootState) => state.genres);

  useEffect(() => {
    const filmList = getFilms();
    if (filmList) {
      filmList.then((data) =>
        dispatch(addInitialFilms(filmsMapper(data.items)))
      );
    }
    const genres = getGenres();
    if (genres) {
      genres.then((data) => dispatch(addGenres(data.genres.slice(0, 5))));
    }
  }, [dispatch]);

  const onAllGenreClick = () => {
    const filmList = getFilms();
    if (filmList) {
      filmList.then((data) =>
        dispatch(addInitialFilms(filmsMapper(data.items)))
      );
    }
  };

  return (
    <div className="filmBlockContainer">
      <div className="genresBlock">
        <button className="genre" onClick={onAllGenreClick}>
          все
        </button>
        {genres.map((genre) => (
          <GenresItem data={genre} />
        ))}
      </div>
      <FilmList />
    </div>
  );
};

export default FilmBlock;
