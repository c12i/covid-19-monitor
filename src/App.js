import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Content, Panel, Placeholder, Header } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import GridComponent from './components/grid/grid.component';

import { fetchAllAsync } from './redux/all/all.actions';
import { fetchCountriesAsync } from './redux/countries/countries.actions';
import { fetchNewsAsync } from './redux/news/news.actions';

const contentStyles = {
  margin: '0 5%',
  marginTop: '50'
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  };

  componentDidMount() {
    const { fetchAllAsync, fetchCountriesAsync, fetchNewsAsync } = this.props;
    fetchAllAsync();
    fetchNewsAsync();
    fetchCountriesAsync();
  }

  handleToggle = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const { Paragraph } = Placeholder;
    return (
      <div className='show-fake-browser sidebar-page'>
        <Container>
          <HeaderComponent />
          <Container style={contentStyles}>
            <Header>
              <h1>HELLO</h1>
            </Header>
            <Content>
              <GridComponent size={24}>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
                <Panel header="Panel title" bordered>
                  <Paragraph />
                </Panel>
              </GridComponent>
            </Content>
            <FooterComponent />
          </Container>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllAsync: () => dispatch(fetchAllAsync()),
  fetchNewsAsync: () => dispatch(fetchNewsAsync()),
  fetchCountriesAsync: () => dispatch(fetchCountriesAsync())
});

export default connect(null, mapDispatchToProps)(App);
