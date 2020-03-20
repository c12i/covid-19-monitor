import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header, Icon, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './jumbotron.styles';

import { selectIsFetching, selectAll } from '../../redux/all/all.selectors';
import { selectIsFetching as isGettingCount } from '../../redux/countries/countries.selectors';
import { selectCountryCount } from '../../redux/countries/countries.selectors';

import LoaderComponent from '../loader/loader.component';
import AllCases from '../all-cases/all-cases.component';
import PieChartComponent from '../pie-chart/pie-chart.component';

const Jumbotron = ({ loading, count, loadingCount, all }) => {
  const { cases, deaths, recovered } = all;

  const activeCases = cases - recovered;

  const activePercentage = Math.round((activeCases/cases) * 100);
  const deathPercentage = Math.round((deaths/cases) * 100);
  const recoveredPercentage = Math.round((recovered/cases) * 100);

  console.log(activePercentage, deathPercentage, recoveredPercentage);

  const data = [
    ['Active Cases %', activePercentage],
    ['Deaths %', deathPercentage],
    ['Recoveries %', recoveredPercentage]
  ];

  return (
    <div>
      <Header style={{ margin: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>
          <Key>
            {
              loadingCount ? <Icon icon="spinner" spin /> :
                count
            }
          </Key>  countries with reported cases</h3>
          <Divider />
      </Header>
      <PieChartComponent data={data} />
      {
        loading ? <LoaderComponent rows={5} spinner>Loading...</LoaderComponent> :
          <AllCases />
      }

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