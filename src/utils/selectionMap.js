const selectionMap = ({ series, films }) => {
  return {
    series: [
      {
        title: "documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "feel good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
};

export default selectionMap;
