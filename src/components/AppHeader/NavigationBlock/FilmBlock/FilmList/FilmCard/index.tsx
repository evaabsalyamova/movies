import { IFilm } from "../../../../../../types/movies";
import "./styles.css";

interface IProps {
  data: IFilm;
}
const FilmCard: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="filmCardBlock">
      <img className="filmPoster" src={data.poster} alt="poster" />
      <div className="filmInfoBlock">
        <div className="filmName">{data.name}</div>
        <div className="filmYear">{data.year}</div>
      </div>
    </div>
  );
};
export default FilmCard;
