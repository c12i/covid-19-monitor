import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { fetchCountryAsync } from '../../redux/countries/countries.actions';
import { selectCountry, selectIsFetching } from '../../redux/countries/countries.selectors';

const CountryPage = ({ match, territory, loading, fetchCountryAsync }) => {
  useEffect(() => {
    fetchCountryAsync(match.params.countryId);
  },[fetchCountryAsync, match.params.countryId]);

  const { country } = territory;

  return (
    <div>
      <br />
      <Panel bordered>
        { country }
        {
          console.log(country)
        }
      </Panel>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  territory: selectCountry,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCountryAsync: match => dispatch(fetchCountryAsync(match))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);