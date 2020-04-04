import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Previous } from './country.styles';

// import LineChart from '@rsuite/charts/lib/charts/LineChart';
// import YAxis from '@rsuite/charts/lib/components/YAxis';
// import Line from '@rsuite/charts/lib/series/Line';

// import { computeLineGraphData } from '../../utils/compute-data.utils';

import { fetchCountryAsync } from '../../redux/countries/countries.actions';
import { selectCountry, selectIsFetching } from '../../redux/countries/countries.selectors';

const CountryPage = ({ match, history, territory, loading, fetchCountryAsync }) => {
  useEffect(() => {
    fetchCountryAsync(match.params.countryId);
  },[fetchCountryAsync, match.params.countryId]);

  const { country } = territory;

  // const xAxis = Object.keys(cases);
  // const casesLine = Object.values(cases);
  // const deathsLine = Object.values(deaths);
  // const recoveredLine = Object.values(recovered);

  return (
    <div>
      <br />
      <Previous to='/countries' style> &#x2B05; Back</Previous>
      <Panel>
        <h3 style={{textAlign: 'center'}}>{country}</h3>
        <p style={{textAlign: 'center'}}>Charts coming soon :)</p>
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