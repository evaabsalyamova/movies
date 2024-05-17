import { useDispatch } from "react-redux";
import { getFilmesByGenre } from "../../../../../../api/movies";
import { IGenre, filmsMapper } from "../../../../../../types/movies";
import { addInitialFilms } from "../../../../../../redux";
import "./styles.css";

interface IProps {
  data: IGenre;
}

const GenresItem: React.FunctionComponent<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  const onGenreClick = () => {
    const filmList = getFilmesByGenre({ genreId: data.id });
    if (filmList) {
      filmList.then((data) =>
        dispatch(addInitialFilms(filmsMapper(data.items)))
      );
    }
  };
  return (
    <button className="genre" onClick={onGenreClick}>
      {data.genre}
    </button>
  );
};

export default GenresItem;
