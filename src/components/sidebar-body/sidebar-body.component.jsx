import React from 'react';

import { Sidenav, Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-dark.css';

const SidebarBody = () => (
  <Sidenav.Body>
    <Nav>
      <Nav.Item eventKey="1" icon={<Icon icon="globe" />}>
        World Cases
                  </Nav.Item>
      <Nav.Item eventKey="2" icon={<Icon icon="newspaper-o" />}>
        News
                  </Nav.Item>
      <Nav.Item eventKey="2" icon={<Icon icon="github" />}>
        Author
                  </Nav.Item>
    </Nav>
  </Sidenav.Body>
);

export default SidebarBody;