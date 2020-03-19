import React from 'react';
import { connect } from 'react-redux';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import SearchForm from '../../components/search-form/search-form.component';

class CountriesPage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: ''
    };
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const { fetchCountriesAsync } = this.props;
    fetchCountriesAsync();
  };


  render() {
    const { searchField } = this.state;

    return (
      <div>
        <br />
        <SearchForm 
        name={'searchField'}
        value={searchField}
        handleChange={this.handleChange} 
        />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(null, mapDispatchToProps)(CountriesPage);