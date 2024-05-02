import { IFilm } from "../../../../../../types/movies";
import "./styles.css";

interface IProps {
  data: IFilm;
}
const FilmCard: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="filmCardBlock">
      <img className="filmPoster" src={data.poster} alt="poster" />
      <div className="filmNameBlock">{data.name}</div>
      <div>{data.year}</div>
    </div>
  );
};
export default FilmCard;
