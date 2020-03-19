import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './countries.styles';

import { fetchCountriesAsync } from '../../redux/countries/countries.actions';

import { selectCountries, selectIsFetching } from '../../redux/countries/countries.selectors';

import SearchForm from '../../components/search-form/search-form.component';
import PlaceholderPanels from '../../components/placeholders/placeholders.component';

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
    const { countries, loading } = this.props;

    const filteredCountries = countries.filter(({ country }) => 
      country.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div>
        <br />
        <SearchForm 
        name={'searchField'}
        value={searchField}
        handleChange={this.handleChange} 
        />
        <br />

        {
          !loading ? 
          filteredCountries.map(({ country, cases, deaths, recovered, active }) => (
            <Panel style={{marginBottom: '10px'}} key={country} bordered>
              <h3>{country}</h3>
              <p><Key>Cases</Key>: {cases}</p>
              <p><Key>Deaths</Key>: {deaths}</p>
              <p><Key>Recovered</Key>: {recovered}</p>
              <p><Key>Active</Key>: {active}</p>
            </Panel>
          )) :
            <PlaceholderPanels />
        }

      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  loading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);