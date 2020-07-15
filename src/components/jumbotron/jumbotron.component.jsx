import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header, Divider, Loader, Message } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './jumbotron.styles';

import { computePercentageData } from '../../utils/compute-data.utils';

import { selectIsFetching, selectAll, selectErrorMessage } from '../../redux/all/all.selectors';
import { selectIsFetching as isGettingCount } from '../../redux/countries/countries.selectors';
import { selectCountryCount } from '../../redux/countries/countries.selectors';

import LoaderComponent from '../loader/loader.component';
import AllCases from '../all-cases/all-cases.component';
import PieChartComponent from '../pie-chart/pie-chart.component';

const Jumbotron = ({ loading, count, loadingCount, all, error }) => {
  const { cases, deaths, recovered } = all;
  const data = computePercentageData(cases, deaths, recovered);

  return (
    <div>
      <Header style={{ margin: "20px" }}>
        <h3 style={{ textAlign: "center" }}>
          <Key>{loadingCount ? <Loader /> : count}</Key> territories with
          reported cases
        </h3>
        <Divider />
      </Header>
      {error ? (
        <Message showIcon type="error" title="Error" description={error} />
      ) : (
        <PieChartComponent data={data} />
      )}

      {loading ? (
        <LoaderComponent rows={5} spinner>
          Loading...
        </LoaderComponent>
      ) : (
        <AllCases />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  count: selectCountryCount,
  loadingCount: isGettingCount,
  all: selectAll,
  error: selectErrorMessage,
});

export default connect(mapStateToProps)(Jumbotron);