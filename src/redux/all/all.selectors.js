import { createSelector } from 'reselect';

const selectAllCases = state => state.allCases;

export const selectAll = createSelector(
  [selectAllCases],
  data => data.all
);

export const selectIsFetching = createSelector(
  [selectAllCases],
  data => data.selectIsFetching
);

export const selectErrorMessage = createSelector(
  [selectAllCases],
  data => data.errorMessage
);
