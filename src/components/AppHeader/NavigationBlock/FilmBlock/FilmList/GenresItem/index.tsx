import { IGenre } from "../../../../../../types/movies";

interface IProps {
  data: IGenre;
}
const GenresItem: React.FunctionComponent<IProps> = ({ data }) => {
  return <div className="genre">{data.genre}</div>;
};

export default GenresItem;
