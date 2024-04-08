import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux";

const FilmList = () => {
  const films = useSelector((state: RootState) => state.movies);
  console.log("REDUX", films);

  if (!films) {
    return null;
  }

  return (
    <div className="filmItemsBlock">
      {films.map((film) => (
        <div key={film.id}>{film.name}</div>
      ))}
    </div>
  );
};

export default FilmList;
