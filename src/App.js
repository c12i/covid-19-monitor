import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container, Content } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

import HomPage from './pages/homepage/homepage.component';
import CountriesPage from './pages/countries/countries.component';
import CountryPage from './pages/country/country.component';
import NewsPage from './pages/news/news.component';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';


const contentStyles = {
  margin: '0 5%',
  marginTop: '50'
}

const App = () => (
  <div className='show-fake-browser sidebar-page'>
    <Container>
      <HeaderComponent />
      <Container style={contentStyles}>
        <Content>
          <Switch>
            <Route exact path='/' component={HomPage} />
            <Route path='/countries' component={CountriesPage} />
            <Route exact path='/news' component={NewsPage} />
          </Switch>
        </Content>
        <FooterComponent />
      </Container>
    </Container>
  </div>
);

export default App;
