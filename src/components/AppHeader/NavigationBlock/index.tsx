import { Link } from "react-router-dom";
import "./styles.css";

const NavigationBlock = () => {
  return (
    <div className="navigationBlock">
      <Link to="filmBlock">
        <button className="films">FILMS</button>
      </Link>
      <button className="series">SERIES</button>
    </div>
  );
};

export default NavigationBlock;
