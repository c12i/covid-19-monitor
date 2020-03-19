import { allActionTypes } from './all.types';

const INITIAL_STATE = {
  all: {
    cases: 219555,
    deaths: 8972,
    recovered: 85751,
    updated: 1584603712630
},
  isFetching: false,
  errorMessage: undefined
};

const allReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case allActionTypes.FETCH_ALL_CASES_START:
      return {
        ...state,
        isFetching: true
      };

    case allActionTypes.FETCH_ALL_CASES_SUCCESS:
      return {
        ...state,
        all: action.payload,
        isFetching: false
      };

    case allActionTypes.FETCH_ALL_CASES_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  };
};

export default allReducer;