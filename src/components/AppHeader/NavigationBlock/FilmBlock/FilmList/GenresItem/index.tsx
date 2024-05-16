import { getFilmesByGenre } from "../../../../../../api/movies";
import { IGenre } from "../../../../../../types/movies";

interface IProps {
  data: IGenre;
}
const GenresItem: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <button
      className="genre"
      onClick={() => getFilmesByGenre({ genreId: data.id })}
    >
      {data.genre}
    </button>
  );
};

export default GenresItem;
