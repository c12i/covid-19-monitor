import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header, Divider, Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './jumbotron.styles';

import { computePercentageData } from '../../utils/compute-data.utils';

import { selectIsFetching, selectAll } from '../../redux/all/all.selectors';
import { selectIsFetching as isGettingCount } from '../../redux/countries/countries.selectors';
import { selectCountryCount } from '../../redux/countries/countries.selectors';

import {default as AllCases} from '../all-cases/all-cases.container';
import PieChartComponent from '../pie-chart/pie-chart.component';

const Jumbotron = ({ count, loadingCount, all }) => {
  const { cases, deaths, recovered } = all;
  const data = computePercentageData(cases, deaths, recovered);

  return (
    <div>
      <Header style={{ margin: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>
          <Key>
            {
              loadingCount ? <Loader /> :
              count
            }
          </Key>  territories with reported cases</h3>
          <Divider />
      </Header>
      <PieChartComponent data={data} />
      <AllCases />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  count: selectCountryCount,
  loadingCount: isGettingCount,
  all: selectAll
});

export default connect(mapStateToProps)(Jumbotron);