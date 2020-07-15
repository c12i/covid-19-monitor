import { newsActionTypes } from './news.types';

const INITIAL_STATE = {
  articles: {
    status: '',
    totalResults: null,
    articles: []
  },
  isFetching: false,
  errorMessage: undefined
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newsActionTypes.FETCH_NEWS_START:
      return {
        ...state,
        isFetching: true
      };

    case newsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isFetching: false
      };

    case newsActionTypes.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  };
};

export default newsReducer;