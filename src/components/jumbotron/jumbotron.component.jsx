import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './jumbotron.styles';

import { selectIsFetching } from '../../redux/all/all.selectors';
import { selectIsFetching as isGettingCount } from '../../redux/countries/countries.selectors';
import { selectCountryCount } from '../../redux/countries/countries.selectors';

import LoaderComponent from '../loader/loader.component';
import AllCases from '../all-cases/all-cases.component';

const Jumbotron = ({ loading, count, loadingCount }) => (
  <div>
    <Header style={{margin: '20px'}}>
      <h3 style={{ textAlign: 'center' }}>
        <Key>
          {
            loadingCount ? <Icon icon="spinner" spin /> :
            count
          }
        </Key>  countries with reported cases</h3>
    </Header>
    
    {
      loading ? <LoaderComponent rows={5} spinner>Loading...</LoaderComponent> :
      <AllCases />
    }

  </div>
);

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  count: selectCountryCount,
  loadingCount: isGettingCount
});

export default connect(mapStateToProps)(Jumbotron);