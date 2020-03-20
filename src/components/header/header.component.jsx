/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Nav, Navbar, Dropdown, Icon, Affix } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const HeaderComponent = () => (
  <Header>
    <Affix>
      <Navbar appearance="default">
        <Navbar.Body>
          <Nav>
            <Link to='/'>
              <Nav.Item icon={<Icon icon="dashboard" />}>Home</Nav.Item>
            </Link>
            <Link to='/countries'>
              <Nav.Item>Countries</Nav.Item>
            </Link>
            <Link to='/news'>
              <Nav.Item>News</Nav.Item>
            </Link>
            <Dropdown title="About" icon={<Icon icon="github" />}>
              <a href='https://github.com/collinsmuriuki'>
                <Dropdown.Item>Author</Dropdown.Item>
              </a>
              <a href='https://github.com/collinsmuriuki/COVID-19-monitor'>
                <Dropdown.Item>Repository</Dropdown.Item>
              </a>
              <a href='https://muriuki.dev'>
                <Dropdown.Item>Website</Dropdown.Item>
              </a>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  </Header>
);

export default HeaderComponent;