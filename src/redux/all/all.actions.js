import { allActionTypes } from './all.types';

import { urls } from '../../api/urls';

export const fetchAllStart = () => ({
  type: allActionTypes.FETCH_ALL_CASES_START
});

export const fetchAllSuccess = all => ({
  type: allActionTypes.FETCH_ALL_CASES_SUCCESS,
  payload: all
});

export const fetchAllFail = errorMessage => ({
  type: allActionTypes.FETCH_ALL_CASES_FAIL,
  payload: errorMessage
});

export const fetchAllAsync = () => {
  return dispatch => {
    dispatch(fetchAllStart());
    fetch(urls.ALL_CASES)
      .then(response => response.json())
      .then(data => dispatch(fetchAllSuccess(data)))
      .catch(error => {
        const errorMessage = error.toString();
        dispatch(fetchAllFail(errorMessage))
      });
  };
};