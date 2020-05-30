import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container, Content, Loader } from 'rsuite';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const CountriesPage = lazy(() => import('./pages/countries/countries.component'));
const NewsPage = lazy(() => import('./pages/news/news.component'));

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
            <Suspense fallback={<Loader center content="loading" />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/countries' component={CountriesPage} />
              <Route exact path='/news' component={NewsPage} />
              <FooterComponent />
            </Suspense>
          </Switch>
        </Content>
      </Container>
    </Container>
  </div>
);

export default App;
