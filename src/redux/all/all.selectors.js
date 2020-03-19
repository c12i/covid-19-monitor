import { createSelector } from 'reselect';

const selectAllCases = state => state.allCases;

export const selectAll = createSelector(
  [selectAllCases],
  allCases => allCases.all
);

export const selectIsFetching = createSelector(
  [selectAllCases],
  allCases => allCases.isFetching
);

export const selectErrorMessage = createSelector(
  [selectAllCases],
  allCases => allCases.errorMessage
);
