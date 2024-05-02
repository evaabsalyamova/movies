import { IFilm } from "../../../../../../types/movies";

interface IProps {
  data: IFilm;
}
const FilmCard: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="filmCardBlock">
      <div>{data.name}</div>
      <div>{data.year}</div>
      <img src={data.poster} alt="poster" />
    </div>
  );
};
export default FilmCard;
