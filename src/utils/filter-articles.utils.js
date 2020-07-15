export const filterNews = (articles) => {
  if (articles) {
    return articles
      .filter((article) => article.title !== null);
  }
  return [];
};
