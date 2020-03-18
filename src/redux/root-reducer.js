import { combineReducers } from 'redux';

import countriesReducer from './countries/countries.reducer';
import allReducer from './all/all.reducer';
import newsReducer from './news/news.reducer';

export default combineReducers({
  allCases: allReducer,
  countriesCases: countriesReducer,
  news: newsReducer
});