import React from "react";
import { useParams } from "react-router-dom";

const FilmPage = () => {
  const { id } = useParams();

  return <>{id}</>;
};

export default FilmPage;
