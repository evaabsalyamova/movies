import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";
import FilmCard from "./FilmCard";
import "./styles.css";
import { NavLink } from "react-router-dom";

const FilmList = () => {
  const films = useSelector((state: RootState) => state.movies);

  if (!films) {
    return null;
  }

  return (
    <div className="filmItemsBlock">
      {films.map((film) => (
        <NavLink to={`/film/${film.id}`}>
          <FilmCard data={film} />
        </NavLink>
      ))}
    </div>
  );
};

export default FilmList;
