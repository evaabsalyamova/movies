import { useEffect } from "react";
import { addGenres, addInitialFilms } from "../../../../redux";
import FilmList from "./FilmList";
import { getFilms, getGenres } from "../../../../api/movies";
import { filmsMapper } from "../../../../types/movies";
import { useDispatch } from "react-redux";

const FilmBlock: React.FunctionComponent = () => {
  const dispatch = useDispatch();

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
      <FilmList />
    </div>
  );
};

export default FilmBlock;
