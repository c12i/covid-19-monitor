import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { selectErrorMessage, selectIsFetching } from '../../redux/all/all.selectors';

import LoaderComponent from '../loader/loader.component';
import AllCases from '../all-cases/all-cases.component';

const Jumbotron = ({ loading, error }) => (
  <div>
    <Header>
      <h2 style={{ textAlign: 'center' }}>All Cases</h2>
    </Header>

    {
      loading ? <LoaderComponent rows={6} spinner>Loading...</LoaderComponent> :
      <AllCases />
    }

  </div>
);

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  error: selectErrorMessage
});

export default connect(mapStateToProps)(Jumbotron);