import React from "react";
import BrowseContainer from "../containers/BrowseContainer";
import useContent from "../hooks/use-content";
import selectionMap from "../utils/selectionMap";

const Browse = () => {
  const series = useContent("series");
  const films = useContent("films");
  const slides = selectionMap({ series, films });
  console.log(series);

  return <BrowseContainer slides={slides} />;
};

export default Browse;
