import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllAsync } from '../../redux/all/all.actions';
import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import Jumbotron from '../../components/jumbotron/jumbotron.component'

const HomePage = ({ fetchAllAsync, fetchCountriesAsync }) => {
  useEffect(() => {
    fetchAllAsync();
    fetchCountriesAsync();
  }, [fetchAllAsync, fetchCountriesAsync]);

  return (
    <div>
      <Jumbotron />
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  fetchAllAsync: () => dispatch(fetchAllAsync()),
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(null, mapDispatchToProps)(HomePage);
