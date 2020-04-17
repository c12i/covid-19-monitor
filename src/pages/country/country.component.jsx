import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Previous } from './country.styles';

import { computeChartData } from '../../utils/compute-data.utils';

import LoaderComponent from '../../components/loader/loader.component';
import BarChartComponent from '../../components/bar-chart/bar-chart.component';

import { fetchCountryAsync } from '../../redux/countries/countries.actions';
import { selectCountry, selectIsFetching } from '../../redux/countries/countries.selectors';

const CountryPage = ({ match, territory, loading, fetchCountryAsync }) => {
  useEffect(() => {
    fetchCountryAsync(match.params.countryId);
  },[fetchCountryAsync, match.params.countryId]);

  const { country } = territory;
  let data;
  try {
    data = computeChartData(territory);
  } catch {
    data = null;
  }

  return (
    <div>
      <br />
      <Previous to='/countries' style><Icon icon='arrow-left' /> Back</Previous>
      <Panel>
        {
          loading ? <LoaderComponent rows={5} /> : (
            <div>
              <h3 style={{textAlign: 'center'}}>{country} Statistics</h3>
              <BarChartComponent territory={territory} data={data} />
            </div>
          )
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