import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";
import FilmCard from "./FilmCard";
import "./styles.css";

const FilmList = () => {
  const films = useSelector((state: RootState) => state.movies);
  const genres = useSelector((state: RootState) => state.genres);

  console.log("REDUX", films);

  if (!films) {
    return null;
  }

  return (
    <div className="filmItemsBlock">
      {genres.map((genre) => (
        <div>{genre.genre}</div>
      ))}

      {films.map((film) => (
        <FilmCard data={film} />
      ))}
    </div>
  );
};

export default FilmList;
