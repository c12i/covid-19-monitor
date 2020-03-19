import React from 'react';

import { Header, Nav, Navbar, Dropdown, Icon, Affix } from 'rsuite';
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
            <Dropdown title="About" icon={<Icon icon="github" />}>
              <Dropdown.Item>Author</Dropdown.Item>
              <Dropdown.Item>Repository</Dropdown.Item>
              <Dropdown.Item>Website</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  </Header>
);

export default HeaderComponent;