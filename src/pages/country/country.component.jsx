import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Previous } from './country.styles';

import BarChart from '@rsuite/charts/lib/charts/BarChart';
import YAxis from '@rsuite/charts/lib/components/YAxis';
import Bars from '@rsuite/charts/lib/series/Bars';

import { computeChartData, generateAxisLabel, checkMinimumInterval } from '../../utils/compute-data.utils';
import { colors } from '../../utils/other.utils';

import LoaderComponent from '../../components/loader/loader.component';

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
          loading ? <LoaderComponent /> : (
            <div>
               <h3 style={{textAlign: 'center'}}>{country} Statistics</h3>
               <BarChart name={`${country} statistics`} data={data} >
                <YAxis axisLabel={value => generateAxisLabel(value, territory)} minInterval={checkMinimumInterval(territory)} />
                <Bars color={colors} label={({ value }) => value}/>
              </BarChart>
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