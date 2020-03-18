import React from 'react';

import { Sidenav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const SidenavHeader = () => (
  <Sidenav.Header>
    <div style={headerStyles}>
      <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
      <span style={{ marginLeft: 12 }}> COVID-19 Monitor </span>
    </div>
  </Sidenav.Header>
);

export default SidenavHeader;