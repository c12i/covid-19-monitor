import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Content, Panel, Placeholder } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

import SidebarComponent from './components/sidebar/sidebar.component';
import HeaderComponent from './components/header/header.component';

import { fetchAllAsync } from './redux/all/all.actions';
import { fetchCountriesAsync } from './redux/countries/countries.actions';
import { fetchNewsAsync } from './redux/news/news.actions';

const contentStyles = {
  margin: '0 5%'
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
          <SidebarComponent expand={this.state.expand} handleToggle={this.handleToggle} />
          <Container style={contentStyles}>
            <HeaderComponent pageTitle={'TITLE'} />
            <Content>
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
            </Content>
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
