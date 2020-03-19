import { createSelector } from 'reselect';

const selectNews = state => state.news;

export const selectArticles = createSelector(
  [selectNews],
  data => data.articles
);

export const selectIsFetching = createSelector(
  [selectNews],
  data => data.isFetching
);

export const selectErrorMessage = createSelector(
  [selectNews],
  data => data.errorMessage
);