import React from 'react';

import { Container, Content, Panel, Placeholder } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

import SidebarComponent from './components/sidebar/sidebar.component';
import HeaderComponent from './components/header/header.component';

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
          <SidebarComponent  expand={this.state.expand} handleToggle={this.handleToggle} />
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
            </Content>
          </Container>
        </Container>
      </div>
    )
  }
}

export default App;
