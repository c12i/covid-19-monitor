import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAsync } from '../../redux/all/all.actions';
import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import Jumbotron from '../../components/jumbotron/jumbotron.component'

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchAllAsync, fetchCountriesAsync } = this.props;
    fetchAllAsync();
    fetchCountriesAsync();
  }

  render() {

    return (
      <div>
        <Jumbotron />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  fetchAllAsync: () => dispatch(fetchAllAsync()),
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(null, mapDispatchToProps)(HomePage);
