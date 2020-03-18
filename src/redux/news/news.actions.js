import { newsActionTypes } from './news.types';

import { urls } from '../../api/urls';

export const fetchNewsStart = () => ({
  type: newsActionTypes.FETCH_NEWS_START
});

export const fetchNewsSuccess = articles => ({
  type: newsActionTypes.FETCH_NEWS_SUCCESS,
  payload: articles
});

export const fetchNewsFail = errorMessage => ({
  type: newsActionTypes.FETCH_NEWS_FAIL,
  payload: errorMessage
});

export const fetchNewsAsync = () => {
  return dispatch => {
    dispatch(fetchNewsStart());
    fetch(urls.NEWS)
      .then(respose => respose.json())
      .then(data => dispatch(fetchNewsSuccess(data)))
      .catch(error => {
        const errorMessage = error.toString();
        dispatch(fetchNewsFail(errorMessage));
      });
  };
};