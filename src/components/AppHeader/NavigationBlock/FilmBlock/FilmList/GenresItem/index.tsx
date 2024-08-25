import { useDispatch } from "react-redux";
import { getFilmesByGenre } from "../../../../../../api/movies";
import { IGenre, filmsMapper } from "../../../../../../types/movies";
import { addInitialFilms } from "../../../../../../redux";
import "./styles.css";

interface IProps {
  genre: IGenre;
}

const GenresItem: React.FunctionComponent<IProps> = ({ genre }) => {
  const dispatch = useDispatch();
  const onGenreClick = () => {
    const filmList = getFilmesByGenre({ genreId: genre.id });
    if (filmList) {
      filmList.then((filmsByGenre) =>
        dispatch(addInitialFilms(filmsMapper(filmsByGenre.items)))
      );
    }
  };
  return (
    <button className="genre" onClick={onGenreClick}>
      {genre.genre}
    </button>
  );
};

export default GenresItem;
