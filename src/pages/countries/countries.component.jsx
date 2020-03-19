import React from 'react';
import { connect } from 'react-redux';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

class CountriesPage extends React.Component {
  componentDidMount() {
    const { fetchCountriesAsync } = this.props;
    fetchCountriesAsync();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(null, mapDispatchToProps)(CountriesPage);