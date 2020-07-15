import {countriesActionTypes } from './countries.types';

const INITIAL_STATE = {
  countries: [],
  country: {
    country: null,
    provinces: null,
    timeline: {
      cases: {},
      deaths: {},
      recovered: {}
    }
  },
  isFetching: false,
  errorMessage: undefined
};

const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countriesActionTypes.FETCH_COUNTRIES_CASES_START:
    case countriesActionTypes.FETCH_COUNTRY_START:
      return {
        ...state,
        isFetching: true
      };

    case countriesActionTypes.FETCH_COUNTRIES_CASES_SUCCESS:
      return {
        ...state,
        countries: [...action.payload],
        isFetching: false
      };

    case countriesActionTypes.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        country: {...action.payload},
        isFetching: false
      }

    case countriesActionTypes.FETCH_COUNTRIES_CASES_FAIL:
    case countriesActionTypes.FETCH_COUNTRY_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  };
};

export default countriesReducer;