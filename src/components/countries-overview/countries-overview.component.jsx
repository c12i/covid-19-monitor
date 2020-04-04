import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SearchForm from '../search-form/search-form.component';
import PlaceholderPanels from '../placeholders/placeholders.component';
import CountryPanel from '../country-panel/country-panel.component';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import { selectCountries, selectIsFetching } from '../../redux/countries/countries.selectors';

const CountriesOverview = ({ loading, countries, fetchCountriesAsync }) => {
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetchCountriesAsync();
  }, [fetchCountriesAsync]);

  const handleChange = ({ target: { value } }) => {
    setSearchField(value);
  };

  const withoutWorld = countries.filter(({ country }) => country !== 'World');
  const filteredCountries = withoutWorld.filter(({ country }) => 
    country.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div>
      <br />
      <SearchForm
        name='searchField'
        value={searchField}
        handleChange={handleChange}
      />
      <br />

      {
        !loading ?
          filteredCountries.map(country => (
            <CountryPanel {...country} />
          )) :
          <PlaceholderPanels rows={6} />
      }
    </div>
)};

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesOverview);