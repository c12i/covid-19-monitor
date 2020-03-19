import React from 'react';

import { Header, Navbar, Nav, Icon, Affix } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const HeaderComponent = () => (
  <Header>
    <Affix>
      <Navbar appearance="inverse">
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            <Nav.Item>Countries</Nav.Item>
            <Nav.Item>News</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="github" />}>Author</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  </Header>
);

export default HeaderComponent;