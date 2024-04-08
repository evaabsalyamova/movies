import { useEffect } from "react";
import { addInitialFilms } from "../../../../redux";
import FilmList from "./FilmList";
import { getFilms } from "../../../../api/movies";
import { filmsMapper } from "../../../../types/movies";
import { useDispatch } from "react-redux";

const FilmBlock: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filmList = getFilms();
    if (filmList) {
      filmList.then((data) => dispatch(addInitialFilms(filmsMapper(data))));
    }
  }, [dispatch]);

  return (
    <div className="filmBlockContainer">
      <FilmList />
    </div>
  );
};

export default FilmBlock;
