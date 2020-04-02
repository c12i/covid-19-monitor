import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import { selectCountries, selectIsFetching } from '../../redux/countries/countries.selectors';

import SearchForm from '../../components/search-form/search-form.component';
import PlaceholderPanels from '../../components/placeholders/placeholders.component';
import CountryPanel from '../../components/country-panel/country-panel.component';

const CountriesPage = ({ fetchCountriesAsync, countries, loading }) => {
  const [ searchField, setSearchField ] = useState('');

  const handleChange = event => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetchCountriesAsync();
  }, [fetchCountriesAsync]);
  
  const filteredCountries = countries.filter(({ country }) => 
    country.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div>
      <br />
      <SearchForm 
      name={'searchField'}
      value={searchField}
      handleChange={handleChange} 
      />
      <br />

      {
        !loading ? 
        filteredCountries.map(({ country, cases, deaths, recovered, active, todayCases, todayDeaths }) => (
          <CountryPanel 
          country={country}
          cases={cases}
          deaths={deaths}
          recovered={recovered}
          active={active}
          todayCases={todayCases}
          todayDeaths={todayDeaths} />
        )) :
          <PlaceholderPanels rows={6} />
      }

    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);