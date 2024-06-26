import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";
import FilmCard from "./FilmCard";
import "./styles.css";

const FilmList = () => {
  const films = useSelector((state: RootState) => state.movies);

  if (!films) {
    return null;
  }

  return (
    <div className="filmItemsBlock">
      {films.map((film) => (
        <FilmCard data={film} />
      ))}
    </div>
  );
};

export default FilmList;
