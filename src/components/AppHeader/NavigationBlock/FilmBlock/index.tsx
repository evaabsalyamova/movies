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
      filmList.then((data) => dispatch(addInitialFilms(filmsMapper(data))));
    }
    const genres = getGenres();
    if (genres) {
      genres.then((data) => dispatch(addGenres(data.genres.slice(0, 5))));
    }
  }, [dispatch]);

  return (
    <div className="filmBlockContainer">
      <div className="genresBlock">
        {genres.map((genre) => (
          <GenresItem data={genre} />
        ))}
      </div>
      <FilmList />
    </div>
  );
};

export default FilmBlock;
