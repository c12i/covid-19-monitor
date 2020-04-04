import React from 'react';
import { Route } from 'react-router-dom';

import CountriesOverview from '../../components/countries-overview/countries-overview.component';
import CountryPage from '../country/country.component';

const CountriesPage = ({ match }) => {

  return (
    <div>
      <Route exact path={`${match.path}`} component={CountriesOverview} />
      <Route exact path={`${match.path}/:countryId`} component={CountryPage} />
    </div>
  )
};

export default CountriesPage;