import { countriesActionTypes } from './countries.types';

import { urls } from '../../api/urls'

export const fetchCountriesStart = () => ({
  type: countriesActionTypes.FETCH_COUNTRIES_CASES_START
});

export const fetchCountriesSuccess = countries => ({
  type: countriesActionTypes.FETCH_COUNTRIES_CASES_SUCCESS,
  payload: countries
});

export const fetchCountriesFail = errorMessage => ({
  type: countriesActionTypes.FETCH_COUNTRIES_CASES_FAIL,
  payload: errorMessage
});

export const fetchCountriesAsync = () => {
  return dispatch => {
    dispatch(fetchCountriesStart());
    fetch(urls.COUNTRIES)
      .then(response => response.json())
      .then(data => dispatch(fetchCountriesSuccess(data)))
      .catch(error => {
        const errorMessage = error.toString();
        dispatch(fetchCountriesFail(errorMessage));
      });
  };
};