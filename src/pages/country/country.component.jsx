import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Previous } from './country.styles';

import { fetchCountryAsync } from '../../redux/countries/countries.actions';
import { selectCountry, selectIsFetching } from '../../redux/countries/countries.selectors';

const CountryPage = ({ match, history, territory, loading, fetchCountryAsync }) => {
  useEffect(() => {
    fetchCountryAsync(match.params.countryId);
  },[fetchCountryAsync, match.params.countryId]);

  const { country } = territory;

  return (
    <div>
      <br />
      <Previous to='/countries' style> &#x2B05; Back</Previous>
      <Panel>
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