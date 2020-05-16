export const filterNews = (articles) => {
  if (articles) {
    return articles
      .filter((article) => article.title !== null)
      .filter((article) =>
        article.title
          .toLowerCase()
          .includes(
            "coronavirus" || "covid-19" || "covid19" || "outbreak" || "pandemic"
          )
      );
  }
  return [];
};
