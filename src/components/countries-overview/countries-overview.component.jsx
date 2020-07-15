import React, { useState, useEffect, useCallback }from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Message } from "rsuite";

import SearchForm from '../search-form/search-form.component';
import PlaceholderPanels from '../placeholders/placeholders.component';
import CountryPanel from '../country-panel/country-panel.component';

import { getKey } from '../../utils/get-key.utils';
import { filterCountriesfromContinents } from '../../utils/filer-countries.utils';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import { selectCountries, selectIsFetching, selectErrorMessage } from '../../redux/countries/countries.selectors';

const CountriesOverview = ({ loading, countries, fetchCountriesAsync, error }) => {
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetchCountriesAsync();
  }, [fetchCountriesAsync]);

  const handleChange = useCallback(({ target: { value } }) => {
    setSearchField(value);
  }, []);

  const withoutWorld = filterCountriesfromContinents(countries);
  const filteredCountries = withoutWorld.filter(({ country }) => 
    country.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div>
      <br />
      <SearchForm
        name="searchField"
        value={searchField}
        handleChange={handleChange}
      />
      <br />
      {loading && <PlaceholderPanels rows={6} />}
      {error ? (
        <Message type="error" description={error} />
      ) : (
        filteredCountries.map((country) => (
          <CountryPanel key={getKey(country.country)} {...country} />
        ))
      )}
    </div>
  );};

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  loading: selectIsFetching,
  error: selectErrorMessage
});

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesOverview);