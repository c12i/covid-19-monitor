import React from 'react';

import { Header } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const HeaderComponent = ({ pageTitle }) => (
  <Header>
    <h2>{pageTitle}</h2>
  </Header>
);

export default HeaderComponent;